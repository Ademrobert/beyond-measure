// Scroll status

window.addEventListener('scroll', function () {
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const fullPageHeight = document.documentElement.scrollHeight;
    const scrolledPercentage = (scrollTop / (fullPageHeight - windowHeight)) * 100;

    const scrollStatusDiv = document.querySelector('.scroll_status');
    scrollStatusDiv.style.width = scrolledPercentage + '%';
});

// Nav scrolled

const navbar = document.querySelector('nav');
let lastScrollPosition = window.scrollY;

window.addEventListener('scroll', () => {
  const currentScrollPosition = window.scrollY;

  if (currentScrollPosition > lastScrollPosition) {
    navbar.classList.add('scrolled');
    navbar.classList.remove('scrolled-up');
  } else if (currentScrollPosition < lastScrollPosition) {
    navbar.classList.remove('scrolled');
    navbar.classList.add('scrolled-up');
  }

  if (currentScrollPosition === 0) {
    navbar.classList.remove('scrolled');
    navbar.classList.remove('scrolled-up');
  }

  lastScrollPosition = currentScrollPosition;
});

// CTA cursors

document.addEventListener("DOMContentLoaded", function () {
    const cursorElements = document.querySelectorAll(".cursor_el");

    cursorElements.forEach(function (cursorElement) {
        const cursorWidth = cursorElement.clientWidth;
        const cursorHeight = cursorElement.clientHeight;

        document.addEventListener("mousemove", function (e) {
            const x = e.pageX - cursorWidth / 2;
            const y = e.pageY - cursorHeight / 2;

            cursorElement.style.left = x + "px";
            cursorElement.style.top = y + "px";
        });
    });
});

const workBanners = document.querySelectorAll('.work_item');
const workCta = document.querySelector('.work_cta');

function addCtaClass() {
    workCta.classList.add('work_cta_visible');
}

function removeCtaClass() {
    workCta.classList.remove('work_cta_visible');
}

workBanners.forEach(banner => {
    banner.addEventListener('mouseover', addCtaClass);
    banner.addEventListener('mouseout', removeCtaClass);
});

// Scroll animations

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

// Back to top
const backToTopLink = document.querySelector(".back-to-top");

backToTopLink.style.opacity = "0";

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopLink.style.opacity = "1";
  } else {
    backToTopLink.style.opacity = "0";
  }
});

backToTopLink.addEventListener("click", (event) => {
  event.preventDefault();
  const scrollOptions = {
    top: 0,
    behavior: "smooth",
  };
  window.scrollTo(scrollOptions);
});