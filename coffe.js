const menuOpenButton= document.querySelector("#menu-open-button");
const menuCloseButton= document.querySelector("#menu-close-button");


menuOpenButton.addEventListener("click",() => {
    // toggle mobile menu visibillity

    document.body.classList.toggle("show-mobile-menu");
});

menuCloseButton.addEventListener("click", ()=> menuOpenButton.click());

// initialize swiper


const swiper = new Swiper(".slider-wrapper", {
    loop: true,
    spaceBetween: 25,

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView:2
        },
        1024: {
            slidesPerView:3
        }
    }

});

const sectionTitles = document.querySelectorAll(".section-title");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.3
});

sectionTitles.forEach((title) => {
    observer.observe(title);
});