// JQUERY
$('document').ready(function () {
  //Pozivi funkcija//
  dinamickiMeni();
  navSlide();
  ubacivanjeSliderSlika();
  facilitiesIspis();
  ispisBookingSectiona();
  ispisLocationSectiona();
  ispisFooterSectiona();

  // On hover change img
  $('#workDesk').hover(
    function () {
      $('#workDesk').attr('src', 'assets/img/hoverimage.jpg').fadeIn();
    },
    function () {
      $('#workDesk').attr('src', 'assets/img/section2img.jpg').fadeIn();
    }
  );

  // Scroll To Top Arrow
  $('.scrollTop').on('click', () => {
    window.scrollTo(0, 0);
  });

  // Initially scroll Link is not visible, after 200 it fades in
  $('.scrollTop').hide(); // Initally hidden
  $(document).scroll(function () {
    if ($(document).scrollTop() > 200) {
      $('.scrollTop').fadeIn();
    } else {
      $('.scrollTop').fadeOut();
    }
  });

  //Image slider
  $('.chevron-right a').on('click', function (e) {
    e.preventDefault();
    var currentImg = $('.active');
    var nextImg = currentImg.next();

    if (nextImg.length) {
      currentImg.removeClass('active');
      nextImg.addClass('active');
    } else {
      currentImg.removeClass('active');
      nextImg = currentImg.parent().children(':first');
      nextImg.addClass('active');
    }
  });

  $('.chevron-left a').on('click', function (e) {
    e.preventDefault();
    var currentImg = $('.active');
    var prevImg = currentImg.prev();

    if (prevImg.length) {
      currentImg.removeClass('active');
      prevImg.addClass('active');
    } else {
      currentImg.removeClass('active');
      prevImg = currentImg.parent().children(':last');
      prevImg.addClass('active');
    }
  });

  // Read More
  $('.slide-toggle').hide();
  $('.read-more').css('cursor', 'pointer');
  $('.read-more').click(function () {
    $(this).prev().slideToggle('fast');
  });
});

// Dinamicki meni

const arrayLinks = [
  ['Home', 'index.html'],
  ['About', '#aboutus'],
  ['Facilities', '#facilities'],
  ['Rooms', '#rooms'],
  ['Contact', '#contact'],
  ['Author', 'author.html'],
  ['Docs', 'documentation.pdf'],
];

function dinamickiMeni() {
  let ulTag = document.querySelector('.nav-links');
  for (let i = 0; i < arrayLinks.length; i++) {
    let li = document.createElement('li');
    let link = document.createElement('a');
    link.setAttribute('href', arrayLinks[i][1]); // Upisivanje atributa koji se u svakoj iteraciji nalazi na 2. mestu niza
    let linkName = document.createTextNode(arrayLinks[i][0]);
    link.appendChild(linkName);
    li.appendChild(link);
    ulTag.appendChild(li);
  }
}

// Burger meni
const navSlide = function () {
  const burger = document.querySelector('.burger'); // Selecting burger
  const nav = document.querySelector('.nav-links'); // Selecting nav-links
  const navLinks = document.querySelectorAll('.nav-links li');

  burger.addEventListener('click', function () {
    // Toggle nav
    nav.classList.toggle('nav-active'); //toggles class nav-active

    // Animacija Linkova
    navLinks.forEach(function (link, index) {
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `navLinksFade 0.5s forwards ${index / 8 + 0.5}s`;
      }
    });

    //Burger X animation
    burger.classList.toggle('toggle');
  });
};

// Slider slike
const arraySrc = [
  'assets/img/sliderimage1.jpg',
  'assets/img/sliderimage2.jpg',
  'assets/img/sliderimage3.jpg',
  'assets/img/sliderimage4.jpg',
];

const arrayAlt = [
  'Restaurant dish',
  'Restaurant breakfast',
  'Hotel Bedroom',
  'Hotel view',
];

function ubacivanjeSliderSlika() {
  let slider = document.getElementById('slider');
  arraySrc.forEach((value) => {
    var imgTag = document.createElement('img');
    imgTag.setAttribute('src', value);
    if (value === 'assets/img/sliderimage1.jpg') {
      imgTag.classList.add('active');
    }
    slider.appendChild(imgTag);
  });
}

const arrayFacilityIcons = [
  ['fas', 'fa-wifi', 'fa-3x'],
  ['fas', 'fa-parking', 'fa-3x'],
  ['fas', 'fa-smoking-ban', 'fa-3x'],
  ['fas', 'fa-utensils', 'fa-3x'],
  ['fas', 'fa-hot-tub', 'fa-3x'],
  ['fas', 'fa-bed', 'fa-3x'],
];

const arrayFacilityText = [
  'Free WiFi',
  'Free Parking',
  'Non-smoking',
  'Restaurant',
  'Free sauna',
  'Luxury Rooms',
];

const arrayFacilityDescription = [
  'Hotel has WiFi everywhere in the building',
  'We also have free parking places in our hotel',
  'We also have non-smoking restaurant area in our hotel.',
  'Our restaurant was the highest rated hotel restaurant in the past year',
  'We offer you to use our sauna and jakuzzi for free, as well as ourbig pool.',
  "This is the right place for you if you're looking for luxurious ambient",
];

function facilitiesIspis() {
  let section3ContentItems = document.querySelector('.section-3-content');
  for (let i = 0; i < arrayFacilityIcons.length; i++) {
    let elementDiv = document.createElement('div');
    elementDiv.classList.add('section-3-content-items');
    elementI = document.createElement('i');
    elementI.classList.add(
      `${arrayFacilityIcons[i][0]}`,
      `${arrayFacilityIcons[i][1]}`,
      `${arrayFacilityIcons[i][2]}`
    );
    let p1 = document.createElement('p');
    let p1text = document.createTextNode(arrayFacilityText[i]);
    let p2 = document.createElement('p');
    p2.classList.add('slide-toggle');
    let p2text = document.createTextNode(arrayFacilityDescription[i]);
    let linkReadMore = document.createElement('a');
    linkReadMore.classList.add('read-more');
    let linkReadMoreText = document.createTextNode('Read More');
    linkReadMore.appendChild(linkReadMoreText);
    p1.appendChild(p1text);
    p2.appendChild(p2text);
    elementDiv.appendChild(elementI);
    elementDiv.appendChild(p1);
    elementDiv.appendChild(p2);
    elementDiv.appendChild(linkReadMore);

    section3ContentItems.appendChild(elementDiv);
  }
}

const arraySrcBooking = [
  'assets/img/pegazstandard.jpg',
  'assets/img/pegazsuperior.jpg',
  'assets/img/pegaztriple.jpg',
  'assets/img/pegazroom.jpg',
  'assets/img/pegazpremium.jpg',
];

const arrayAltBooking = [
  'Hotel Standard Room',
  'Hotel Superior Room',
  'Hotel Triple Room',
  'Hotel Pegaz Room',
  'Hotel Premium Pegaz Room',
];

const arrayHeadingText = [
  'Standard Room',
  'Superior Room',
  'Pegaz Triple Room',
  'Pegaz Room',
  'Pegaz Premium Room',
];

function ispisBookingSectiona() {
  var section4content = document.querySelector('.section-4-content');

  for (let i = 0; i < arraySrcBooking.length; i++) {
    var elementDiv = document.createElement('div');
    elementDiv.classList.add('grid-items');

    var imageTag = document.createElement('img');
    imageTag.setAttribute('src', `${arraySrcBooking[i]}`);
    imageTag.setAttribute('alt', arrayAltBooking[i]);

    var drugiDiv = document.createElement('div');
    drugiDiv.classList.add('book-now');

    var heading = document.createElement('h4');
    var headingText = document.createTextNode(arrayHeadingText[i]);
    heading.appendChild(headingText);

    var aTag = document.createElement('a');
    aTag.classList.add('btn');
    aTag.setAttribute('href', '#contact');

    var aTagText = document.createTextNode('Book Now');
    aTag.appendChild(aTagText);

    drugiDiv.appendChild(heading);
    drugiDiv.appendChild(aTag);

    elementDiv.appendChild(imageTag);
    elementDiv.appendChild(drugiDiv);

    section4content.append(elementDiv);
  }
}

// Tab switching
const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

// selectItem function
function selectItem(e) {
  removeBorder();
  removeShow();
  this.classList.add('tab-border');
  console.log(this.id);
  const tabContentItem = document.querySelector(`#${this.id}-content`);
  tabContentItem.classList.add('show');
}

function removeBorder() {
  tabItems.forEach(function (item) {
    item.classList.remove('tab-border');
  });
}

function removeShow() {
  tabContentItems.forEach(function (item) {
    item.classList.remove('show');
  });
}

// Tab click
tabItems.forEach(function (item) {
  item.addEventListener('click', selectItem);
});

// Location

const arrayLocationIcons = [
  ['fas', 'fa-map-marker-alt', 'fa-4x'],
  ['fas', 'fa-phone-alt', 'fa-4x'],
  ['fas', 'fa-envelope', 'fa-4x'],
];

const arrayLocationText = [
  'Address: Resavska 29, Vračar, Belgrade',
  'Phone: 062/392-84-52',
  'Email: hotel.pegaz.belgrade@gmail.com',
];

function ispisLocationSectiona() {
  let locationDiv = document.querySelector('.location');

  for (let i = 0; i < arrayLocationIcons.length; i++) {
    var elementDiv = document.createElement('div');
    elementDiv.classList.add('flex-items');

    var iElement = document.createElement('i');
    iElement.classList.add(
      `${arrayLocationIcons[i][0]}`,
      `${arrayLocationIcons[i][1]}`,
      `${arrayLocationIcons[i][2]}`
    );

    var pElement = document.createElement('p');
    var pElementText = document.createTextNode(`${arrayLocationText[i]}`);

    pElement.appendChild(pElementText);
    elementDiv.appendChild(iElement);
    elementDiv.appendChild(pElement);

    locationDiv.appendChild(elementDiv);
  }
}

arrayFooterIcons = [
  ['fas', 'fa-file-word', 'fa-2x', 'fas', 'fa-sitemap', 'fa-2x'],
  ['fab', 'fa-facebook', 'fa-2x', 'fab', 'fa-instagram-square', 'fa-2x'],
];

arrayFooterLinks = [
  ['Documentation', 'Sitemap'],
  ['Facebook', 'Instagram'],
];

arrayFooterHrefTags = [
  ['documentation.pdf', 'sitemap.xml'],
  ['https://www.facebook.com', 'https://www.instagram.com'],
];

function ispisFooterSectiona() {
  let footer = document.querySelector('.footer .grid');
  console.log(footer);

  for (let i = 0; i < arrayFooterIcons.length; i++) {
    var elementDiv = document.createElement('div');
    elementDiv.classList.add('grid-item');

    var prviIElement = document.createElement('i');
    prviIElement.classList.add(
      `${arrayFooterIcons[i][0]}`,
      `${arrayFooterIcons[i][1]}`,
      `${arrayFooterIcons[i][2]}`
    );
    console.log(prviIElement);

    var prviPTag = document.createElement('p');
    var prviATag = document.createElement('a');
    prviATag.setAttribute('href', `${arrayFooterHrefTags[i][0]}`);
    var prviATagText = document.createTextNode(`${arrayFooterLinks[i][0]}`);
    prviATag.appendChild(prviATagText);

    prviPTag.appendChild(prviATag);
    console.log(prviPTag);

    var drugiIElement = document.createElement('i');
    drugiIElement.classList.add(
      `${arrayFooterIcons[i][3]}`,
      `${arrayFooterIcons[i][4]}`,
      `${arrayFooterIcons[i][5]}`
    );

    var drugiPTag = document.createElement('p');
    var drugiATag = document.createElement('a');
    drugiATag.setAttribute('href', `${arrayFooterHrefTags[i][1]}`);
    var drugiATagText = document.createTextNode(`${arrayFooterLinks[i][1]}`);
    drugiATag.appendChild(drugiATagText);
    drugiPTag.appendChild(drugiATag);

    elementDiv.appendChild(prviIElement);
    elementDiv.appendChild(prviPTag);
    elementDiv.appendChild(drugiIElement);
    elementDiv.appendChild(drugiPTag);

    footer.appendChild(elementDiv);
  }
}
