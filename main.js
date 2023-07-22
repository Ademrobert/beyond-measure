var toggle = document.querySelector('.mode_toggle input');
toggle.addEventListener('click', function() {
  var roots = document.querySelectorAll(':root');
  roots.forEach(function(root) {
    root.classList.toggle('lightmode');
  });

  var lightmodeElements = document.querySelectorAll('[id^="lightmode_version"]');
  lightmodeElements.forEach(function(element) {
    element.classList.toggle('lightmode_version');
  });
});

document.addEventListener('DOMContentLoaded', function() {
  var overlay = document.querySelector('.overlay');
  var testimonialContainer = document.querySelector('.testimonial_container');
  var closeBtn = document.querySelector('.close_btn');
  var testimonialBtn = document.querySelector('#testimonial_btn');
  var testimonialsSection = document.querySelector('.testimonials_section');

  closeBtn.addEventListener('click', hideTestimonials);
  testimonialBtn.addEventListener('click', showTestimonials);

  function hideTestimonials() {
    testimonialContainer.style.transform = 'translateX(-100%)';
    overlay.style.display = 'none';
    setTimeout(function() {
      testimonialsSection.style.display = 'none';
    }, 300); // Wait for the transition to finish (300ms)
  }

  function showTestimonials() {
    testimonialsSection.style.display = 'block';
    setTimeout(function() {
      testimonialContainer.style.transform = 'translateX(0)';
      overlay.style.display = 'block';
      overlay.addEventListener('click', hideTestimonials);
    }, 0); // Wait for the next event loop iteration
  }

  testimonialsSection.style.display = 'none'; // Initially hide the section
});

var scroll = window.requestAnimationFrame ||
    function (callback) { window.setTimeout(callback, 1000 / 60) };

var elementsToShow = document.querySelectorAll('.show-on-scroll');

function loop() {

    elementsToShow.forEach(function (element) {
        if (isElementInViewport(element)) {
            element.classList.add('show-animation');
        }
    });
    scroll(loop);
}

loop();

function isElementInViewport(el) {
    // special bonus for those using jQuery
    if (typeof jQuery === "function" && el instanceof jQuery) {
        el = el[0];
    }
    var rect = el.getBoundingClientRect();
    return (
        (rect.top <= 0
            && rect.bottom >= 0)
        ||
        (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.top <= (window.innerHeight || document.documentElement.clientHeight))
        ||
        (rect.top >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
    );
}