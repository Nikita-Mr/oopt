// navbar
let navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function () {
  if (this.window.scrollY > 200) {
    navbar.classList.add('scroll');
    navbar.classList.remove('no_scroll');
  } else {
    navbar.classList.remove('scroll');
    navbar.classList.add('no_scroll');
  }
});

// navbar click
let nav_items = document.querySelectorAll(`.nav-item`);
let collapse = document.querySelector(`.navbar-collapse`);

nav_items.forEach((nav_item) => {
  nav_item.addEventListener(`click`, () =>{
    collapse.classList.remove(`show`)
  })
})

// tabs
let tabLinks = document.querySelectorAll('.button_tab');
let navLink = document.querySelectorAll('.nav-link');
let tabContent = document.querySelectorAll('.tabs');
let navigation = document.querySelectorAll(`.ul_nav`);

navLink.forEach(function (el) {
  el.addEventListener('click', openTabs);
});

tabLinks.forEach(function (el) {
  el.addEventListener('click', openTabs);
});


function openTabs(el) {
  let btnTarget = el.currentTarget;
  let country = btnTarget.dataset.country;
  let navig = btnTarget.dataset.navig;

  tabContent.forEach(function (el) {
    el.classList.remove('active');
  });

  tabLinks.forEach(function (el) {
    el.classList.remove('active');
  });
  
  navigation.forEach(function (el) {
    el.classList.remove('active');
  });

  document.querySelector('#' + country).classList.add('active');
  document.querySelector('#' + navig).classList.add('active');

  btnTarget.classList.add('active');
}
// animation bac_elem
function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
      change.target.classList.add('element_animate');
    }
  });
}
let options = { threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.card_img');
for (let elm of elements) {
  observer.observe(elm);
}






// navigation

// let text = document.querySelectorAll(`.wrapper_paragraph`);
// let buttonsNavigation = document.querySelectorAll(`.navigation`);

// buttonsNavigation.forEach((buttons) => {
//     buttons.addEventListener(`click`, navig)
// });


// function navig(evt) {
//   let button = evt.currentTarget.closest(`a`);
//   let country = ``;

//   for(let i = 0; i <= buttonsNavigation.length; i++){
//     country += button.href.slice(23);
//   }

//   text.forEach((texts) => {
//     texts.id = country;
//   });
// }
