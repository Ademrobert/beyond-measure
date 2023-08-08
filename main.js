// Scroll status

window.addEventListener('scroll', function () {
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const fullPageHeight = document.documentElement.scrollHeight;
    const scrolledPercentage = (scrollTop / (fullPageHeight - windowHeight)) * 100;

    const scrollStatusDiv = document.querySelector('.scroll_status');
    scrollStatusDiv.style.width = scrolledPercentage + '%';
});

// Testimonials

document.addEventListener("DOMContentLoaded", function () {
    const testimonialOpen = document.querySelector(".testimonial-open");
    const testimonialContainer = document.querySelector(".testimonials_container");
    const testimonialContent = document.querySelector(".testimonials_content");
    const testimonialOverlay = document.querySelector(".testimonial_overlay");
    const testimonialCloses = document.querySelectorAll(".testimonial-close");

    function openTestimonials() {
        testimonialContainer.style.display = "block";
        testimonialContent.style.transition = "transform 0.3s";
        setTimeout(function () {
            testimonialOverlay.style.display = "block";
            testimonialContent.style.transform = "translateX(0)";
        }, 300);
    }

    function closeTestimonials() {
        testimonialContent.style.transform = "translateX(-100%)";
        testimonialContent.style.transition = "transform 0.3s";
        testimonialOverlay.style.display = "none";
        setTimeout(function () {
            testimonialContainer.style.display = "none";
        }, 300);
    }

    testimonialOpen.addEventListener("click", openTestimonials);
    testimonialCloses.forEach(function (element) {
        element.addEventListener("click", closeTestimonials);
    });
});

// Hero h1 text height

function adjustHeight() {
    const heroTitleWrapper = document.querySelector('.hero_title-wrapper');
    const heroH1Wrapper = document.querySelector('.hero_h1-wrapper');

    const newHeight = heroH1Wrapper.clientHeight + 'px';
    heroTitleWrapper.style.height = newHeight;
}

window.addEventListener('load', function () {
    adjustHeight();
});

window.addEventListener('resize', function () {
    adjustHeight();
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

// About illustration animation

document.addEventListener("DOMContentLoaded", function () {
    const svgContainer = document.querySelector(".svg-wrapper");
    const groups = document.querySelectorAll(".about-illustration_group");

    const updatePosition = (group, mouseX, mouseY) => {
        const { left, top, width, height } = group.getBoundingClientRect();
        const centerX = left + width / 2;
        const centerY = top + height / 2;
        const deltaX = (mouseX - centerX) * 0.1;
        const deltaY = (mouseY - centerY) * 0.1;
        group.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
    };

    const handleMouseMove = (e) => {
        const mouseX = e.clientX;
        const mouseY = e.clientY;

        groups.forEach((group) => {
            updatePosition(group, mouseX, mouseY);
        });
    };

    const handleMouseLeave = () => {
        groups.forEach((group) => {
            group.style.transform = "translate(0, 0)";
        });
    };

    svgContainer.addEventListener("mousemove", handleMouseMove);
    svgContainer.addEventListener("mouseleave", handleMouseLeave);
});

// Hero img scroll animation

document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", function () {
        const heroSection = document.querySelector(".is-hero");
        if (window.scrollY > 0) {
            heroSection.classList.add("scrolled");
        } else {
            heroSection.classList.remove("scrolled");
        }
    });
});

// Services hover (text animation)

let splitText;
function runSplit() {
    splitText = new SplitType("[stagger-link]", {
        types: "words, chars"
    });
}
runSplit();

// ————— Update on window resize
let windowWidth = $(window).innerWidth();
window.addEventListener("resize", function () {
    if (windowWidth !== $(window).innerWidth()) {
        windowWidth = $(window).innerWidth();
        splitText.revert();
        runSplit();
    }
});

// ———— animation
const staggerLinks = document.querySelectorAll("[stagger-link]");
staggerLinks.forEach((link) => {
    const letters = link.querySelectorAll("[stagger-link-text] .char");
    // Set up the Intersection Observer options
    const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.2, // Change this threshold value based on your preference
    };

    // Callback function when the element enters the viewport
    const handleEnterViewport = (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                gsap.to(letters, {
                    yPercent: -100,
                    duration: 0.5,
                    ease: "power4.inOut",
                    stagger: { each: 0.03, from: "start" },
                    overwrite: true,
                });
            }
        });
    };

    // Create the Intersection Observer
    const observer = new IntersectionObserver(handleEnterViewport, options);
    observer.observe(link);

    // If you also want to trigger the reverse animation when the item leaves the viewport
    // you can create a separate Intersection Observer for that as well.
    // For simplicity, I'm omitting that part in this code.

    // Services clicked

    document.addEventListener("DOMContentLoaded", function () {
        const serviceOpen = document.querySelector(".services-clicked-open");
        const serviceContainer = document.querySelector(".services-clicked_container");
        const serviceContent = document.querySelector(".services-clicked_wrapper");
        const serviceOverlay = document.querySelector(".services-clicked_overlay");
        const serviceCloses = document.querySelectorAll(".services-clicked-close");

        function openService() {
            serviceContainer.style.display = "block";
            serviceContent.style.transition = "0.3s";
            serviceContent.style.dysplay = "block";
            setTimeout(function () {
                serviceOverlay.style.display = "block";
                serviceContent.style.transform = "translateY(0)";
                serviceContent.style.opacity = "1";
            }, 300);
        }

        function closeService() {
            serviceContent.style.transform = "translateY(10%)";
            serviceContent.style.opacity = "0";
            serviceContent.style.transition = "0.3s";
            serviceOverlay.style.display = "none";
            setTimeout(function () {
                serviceContainer.style.display = "none";
            }, 300);
        }

        serviceOpen.addEventListener("click", openService);
        serviceCloses.forEach(function (element) {
            element.addEventListener("click", closeService);
        });
    });

// New