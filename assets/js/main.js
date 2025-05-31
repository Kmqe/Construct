/*=============== SHOW MENU ===============*/
let navMenu = document.getElementById("nav-menu"),
    navToggle = document.getElementById("nav-toggle");
    navClose = document.getElementById("nav-close")

/* Menu show*/
if(navToggle){
    navToggle.addEventListener("click",() => {
        navMenu.classList.add("show-menu")
    });
}

/* Menu hidden*/
if(navClose){
    navClose.addEventListener("click", () => {
        navMenu.classList.remove("show-menu");
    });
}

/*=============== REMOVE MENU MOBILE ===============*/
let navLink = document.querySelectorAll(".nav__link");

let linkAction = () => {
    let navMenu = document.getElementById("nav-menu");
    //When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click",linkAction)) // Important for my Calc Project (:

/*=============== CHANGE BACKGROUND HEADER ===============*/
let bgHeader = () => {
    console.log(scrollY);
    let header = document.getElementById("header");
    // Add a class if the bottom offset is greater than 50 of the value
    this.scrollY >= 50 ? header.classList.add("bg-header")
    : header.classList.remove("bg-header")
}
window.addEventListener("scroll", bgHeader);
bgHeader();


/*=============== SWIPER SERVICES ===============*/
const swiperServices = new Swiper('.services__swiper', {
    loop: true,
    grabCursor: true,
    spaceBetween: 24,
    slidesPerView: "auto",

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
    const scrollUp = document.getElementById("scroll-up")
    // ...
    this.scrollY >= 350 ? scrollUp.classList.add("show-scroll")
                        : scrollUp.classList.remove("show-scroll")
}
window.addEventListener("scroll",scrollUp);
scrollUp();

/*=============== SCROLL SECTION ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
    const scrollDown = window.scrollY;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute("id"),
            sectionsClass = document.querySelector(".nav__menu a[href*=" + sectionId + "]");

            if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
                sectionsClass.classList.add("active-link")
            } else {
                sectionsClass.classList.remove("active-link")
            }
    })
}

window.addEventListener("scroll", scrollActive)


/*=============== SCROLL SECTION ACTIVE LINK ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '100px',
    duration: 2500,
    delay: 400,
})

sr.reveal('.home__content, .services__data, .services__swiper, .footer__container');
sr.reveal('.home__images',{origin: 'bottom', delay: 1000});
sr.reveal('.about__images, .contact__img',{origin: 'left'});
sr.reveal('.about__data, .contact__data',{origin: 'right'});
sr.reveal('.projects__card',{interval: 1000});