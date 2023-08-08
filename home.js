// Testimonials

document.addEventListener("DOMContentLoaded", function () {
    const testimonialOpen = document.querySelector(".testimonial-open");
    const testimonialContainer = document.querySelector(".testimonials_container");
    const testimonialContent = document.querySelector(".testimonials_content");
    const testimonialOverlay = document.querySelector(".testimonial_overlay");
    const testimonialCloses = document.querySelectorAll(".testimonial-close");
    const testimonialDividers = document.querySelectorAll(".testimonial-divider");

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
        testimonialDividers.forEach(function (divider) {
            divider.style.width = "0%";
        });
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

// Services clicked

document.addEventListener("DOMContentLoaded", function () {
    const body = document.body;
    const strategyOpen = document.querySelector(".strategy-open");
    const uxOpen = document.querySelector(".ux-design-open"); 
    const uiOpen = document.querySelector(".ui-design-open");
    const developmentOpen = document.querySelector(".webdevelopment-open");
    const serviceContainer = document.querySelector(".services-clicked_container");
    const serviceStrategy = document.querySelector(".services-clicked_strategy"); 
    const serviceUx = document.querySelector(".services-clicked_ux-design"); 
    const serviceUi = document.querySelector(".services-clicked_ui-design");
    const serviceDevelopment = document.querySelector(".services-clicked_webdevelopment");
    const serviceCloses = document.querySelectorAll(".services-clicked-close");
    const serviceContent = document.querySelectorAll(".services-clicked_wrapper");

    function openStrategy() {
        body.style.overflow = "hidden";
        serviceContainer.style.display = "flex";
        serviceStrategy.style.transition = "0.3s";
        serviceStrategy.style.display = "block";
        setTimeout(function () {
            serviceStrategy.style.transform = "translateY(0)";
            serviceStrategy.style.opacity = "1";
        }, 300);
    }

    function openUx() {
        body.style.overflow = "hidden";
        serviceContainer.style.display = "flex";
        serviceUx.style.transition = "0.3s";
        serviceUx.style.display = "block";
        setTimeout(function () {
            serviceUx.style.transform = "translateY(0)";
            serviceUx.style.opacity = "1";
        }, 300);
    }

    function openUi() {
        body.style.overflow = "hidden";
        serviceContainer.style.display = "flex";
        serviceUi.style.transition = "0.3s";
        serviceUi.style.display = "block";
        setTimeout(function () {
            serviceUi.style.transform = "translateY(0)";
            serviceUi.style.opacity = "1";
        }, 300);
    }

    function openDevelopment() {
        body.style.overflow = "hidden";
        serviceContainer.style.display = "flex";
        serviceDevelopment.style.transition = "0.3s";
        serviceDevelopment.style.display = "block";
        setTimeout(function () {
            serviceDevelopment.style.transform = "translateY(0)";
            serviceDevelopment.style.opacity = "1";
        }, 300);
    }

    function closeService() {
        body.style.overflow = "auto";
        serviceContent.forEach(function (element) {
            element.style.transform = "translateY(10%)";
            element.style.opacity = "0";
            element.style.transition = "0.3s";
        });
        setTimeout(function () {
            serviceContainer.style.display = "none";
            serviceStrategy.style.display = "none";
            serviceUx.style.display = "none";
            serviceUi.style.display = "none";
            serviceDevelopment.style.display = "none";
        }, 300);
    }

    strategyOpen.addEventListener("click", openStrategy);
    uxOpen.addEventListener("click", openUx);
    uiOpen.addEventListener("click", openUi);
    developmentOpen.addEventListener("click", openDevelopment);
    serviceCloses.forEach(function (element) {
        element.addEventListener("click", closeService);
    });
});