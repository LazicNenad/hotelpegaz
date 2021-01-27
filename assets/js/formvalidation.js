const form = document.getElementById('form');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const date = document.getElementById('date');
const roomsForm = document.getElementById('roomsForm');
const submitBtn = document.getElementById('submit');

//  Second form
const form2 = document.getElementById('form2');
const name2 = document.getElementById('name');
const surrname = document.getElementById('surrname');
const textarea = document.getElementById('textarea');

var izrazImePrezime = /^[A-ZČĆŽŠĐ][a-zćčžšđ]{1,16}(\s [A-ZČĆŽŠĐ][a-zćčžšđ]{2,16})*$/;
var izrazMejl = /^([a-z]{3,15})(([\.]?[-]?[_]?[a-z]{3,20})*([\d]{1,3})*)@([a-z]{3,20})(\.[a-z]{2,3})+$/;
var izrazDatum = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/;

form.addEventListener('submit', function (e) {
  // e.preventDefault();
  checkInputs(e);
});

function checkInputs(e) {
  const firstNameValue = firstName.value.trim();
  const lastNameValue = lastName.value.trim();
  const emailValue = email.value.trim();
  const dateValue = date.value.trim();
  const roomsValue = roomsForm.value;

  if (izrazImePrezime.test(firstNameValue)) {
    setSuccess(firstName);
  } else {
    e.preventDefault();
    setError(
      firstName,
      'Name must start with capital letter nad have at least 2 characters'
    );
  }

  if (izrazImePrezime.test(lastNameValue)) {
    setSuccess(lastName);
  } else {
    e.preventDefault();
    setError(
      lastName,
      'Surrname must start with capital letter nad have at least 2 characters'
    );
  }

  if (izrazMejl.test(emailValue)) {
    setSuccess(email);
  } else {
    e.preventDefault();
    setError(email, 'email@email.com');
  }

  if (roomsForm.value == 'choose') {
    e.preventDefault();
    setError(roomsForm, 'Please select the room');
  } else {
    setSuccess(roomsForm);
  }

  if (izrazDatum.test(dateValue)) {
    setSuccess(date);
  } else {
    e.preventDefault();
    setError(date, 'Format of your date is not valid');
  }
}

function checkInputs2(e) {
  const name2Value = name2.value.trim();
  const surrnameValue = surrname.value.trim();
  const textareaValue = textarea.value.trim();

  if (izrazImePrezime.test(name2Value)) {
    setSuccess(name2);
  } else {
    e.preventDefault();
    setError(
      name2,
      'Name must start with capital letter nad have at least 2 characters'
    );
  }

  if (izrazImePrezime.test(surrnameValue)) {
    setSuccess(surrname);
  } else {
    e.preventDefault();
    setError(
      surrname,
      'Surrname must start with capital letter nad have at least 2 characters'
    );
  }

  if (textareaValue.length < 20) {
    e.preventDefault();
    setError(textarea, 'Message must contain at least 20 characters');
  } else {
    setSuccess(textarea);
  }
}

form2.addEventListener('submit', function (e) {
  // e.preventDefault();

  checkInputs2(e);
});

function setError(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');

  small.innerText = message;
  formControl.classList.remove('success');
  formControl.classList.add('error');
}

function setSuccess(input) {
  const formControl = input.parentElement;
  formControl.classList.remove('error');
  formControl.classList.add('success');
}
