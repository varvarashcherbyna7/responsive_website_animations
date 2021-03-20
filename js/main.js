"use strict";

//Select element function
var selectElement = function selectElement(element) {
  return document.querySelector(element);
};

var menuToggle = selectElement('.menu-toggle');
var body = selectElement('body');
menuToggle.addEventListener('click', function () {
  body.classList.toggle('open');
}); //Scroll reveal

window.sr = ScrollReveal();
sr.reveal('.animate-left', {
  origin: 'left',
  duration: 1000,
  distance: '25rem',
  delay: 300
});
sr.reveal('.animate-right', {
  origin: 'right',
  duration: 1000,
  distance: '25rem',
  delay: 600
});
sr.reveal('.animate-top', {
  origin: 'top',
  duration: 1000,
  distance: '25rem',
  delay: 600
});
sr.reveal('.animate-bottom', {
  origin: 'bottom',
  duration: 1000,
  distance: '25rem',
  delay: 600
});
//# sourceMappingURL=main.js.map
