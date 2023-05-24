// ============ Mobile Pop up Menu ==========================
function toggleMenu() {
  const menuIcon = document.querySelector('.nav-icon');
  const menu = document.querySelector('.nav-links-container');
  const screenWidth = window.innerWidth || document.documentElement.clientWidth;

  menuIcon.classList.toggle('open');

  if (menuIcon.classList.contains('open') && screenWidth <= 768) {
    menu.classList.add('open');
    menuIcon.innerHTML = '<i class="fa fa-times fa-lg"></i>';
  } else {
    menuIcon.innerHTML = '<i class="fa fa-bars fa-lg"></i>';
    menu.classList.remove('open');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const menuLinks = document.querySelectorAll('.nav-links-container a');
  for (let i = 0; i < menuLinks.length; i += 1) {
    menuLinks[i].addEventListener('click', () => {
      toggleMenu();
    });
  }
});

// ====== Storing dynamic content of Instructors section in variables ===========
const featuredInstructors = [
  {
    name: 'Gordon Hinckley',
    position: 'Photography Instructor',
    image: './assets/person2.jpg',
    description: 'Established instructor with over 50 collections sold worldwide.',
    className: 'card1',
  },
  {
    name: 'Dickson Joseph',
    position: 'Photography Instructor',
    image: './assets/person2.jpg',
    description: 'Established instructor with over 50 collections sold worldwide.',
    className: 'card2',
  },
  {
    name: 'Grace Ching',
    position: 'Photography Instructor',
    image: './assets/person2.jpg',
    description: 'Established instructor with over 50 collections sold worldwide.',
    className: 'card3',
  },
  {
    name: 'Victor Omondi',
    position: 'Studio Instructor',
    image: './assets/person2.jpg',
    description: 'Established instructor with over 50 collections sold worldwide.',
    className: 'card4',
  },
  {
    name: 'Margaret Wanjiru',
    position: 'Student Advisor',
    image: './assets/person2.jpg',
    description: 'Established instructor with over 50 collections sold worldwide.',
    className: 'card5',
  },
  {
    name: 'Sandra Mwende',
    position: 'Student Advisor',
    image: './assets/person2.jpg',
    description: 'Established instructor with over 50 collections sold worldwide.',
    className: 'card6',
  },

];

// =========== Creating dynamic content for works section ============

const cardContainer = document.createElement('div');
cardContainer.className = 'instructorContainer';

featuredInstructors.forEach((itemContent) => {
  const card = document.createElement('div');
  card.classList.add('cardInstructor', itemContent.className);

  const instructorPhoto = document.createElement('div');
  instructorPhoto.className = 'instructor-photo';

  const image = document.createElement('img');
  image.src = itemContent.image;

  instructorPhoto.appendChild(image);

  const instructorDetails = document.createElement('div');
  instructorDetails.className = 'instructor-details';

  const heading = document.createElement('h1');
  heading.innerHTML = itemContent.name;
  heading.className = 'instructor-name';

  const position = document.createElement('p');
  position.innerHTML = itemContent.position;
  position.className = 'instructor-position';

  const divider = document.createElement('hr');
  divider.className = 'divider';

  const description = document.createElement('p');
  description.innerHTML = itemContent.description;
  description.className = 'instructor-description';

  instructorDetails.appendChild(heading);
  instructorDetails.appendChild(position);
  instructorDetails.appendChild(divider);
  instructorDetails.appendChild(description);

  card.appendChild(instructorPhoto);
  card.appendChild(instructorDetails);
  cardContainer.appendChild(card);
});

const targetElement = document.querySelector('#instructors');
targetElement.appendChild(cardContainer);

const seeMoreBtn = document.getElementById('see-more-btn');

function toggleHiddenCards() {
  const hiddenCards = document.querySelectorAll('.cardInstructor:not(.card1):not(.card2)');

  hiddenCards.forEach((card) => {
    if (card.style.display === 'none') {
      card.style.display = 'flex';
      seeMoreBtn.innerHTML = '<a href="#">LESS</a><i class="fa fa-chevron-up"></i>';
    } else {
      card.style.display = 'none';
      seeMoreBtn.innerHTML = '<a href="#">MORE</a><i class="fa fa-chevron-down"></i>';
    }
  });
}

seeMoreBtn.addEventListener('click', toggleHiddenCards);
