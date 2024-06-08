/*=============== SEARCH ===============*/
const searchButton = document.getElementById('search-button'),
      searchClose = document.getElementById('search-close'),
      searchContent = document.getElementById('search-content')

/*=====SEARCH SHOW=====*/
/*Validate if constant exists*/
if(searchButton){   
    searchButton.addEventListener('click', () =>{
        searchContent.classList.add('show-search')
    })
}

/*=====SEARCH HIDDEN=====*/
/*Validate if constant exists*/
if(searchClose){
    searchClose.addEventListener('click', () =>{
        searchContent.classList.remove('show-search')
    })
}

/*=============== LOGIN ===============*/

const loginButton = document.getElementById('login-button'),
      loginClose = document.getElementById('login-close'),
      loginContent = document.getElementById('login-content')

/*=====LOGIN SHOW=====*/
/*Validate if constant exists*/
if(loginButton){
    loginButton.addEventListener('click', () =>{
        loginContent.classList.add('show-login')
    })
}

/*=====LOGIN HIDDEN=====*/
/*Validate if constant exists*/
if(loginClose){
    loginClose.addEventListener('click', () =>{
        loginContent.classList.remove('show-login')
    })
}

/*=============== ADD SHADOW HEADER ===============*/
const shadowHeader = () =>{
    const header = document.getElementById('header')
    //when the scroll is greater than 50 viewport height,add the shadow header
    this.scrollY >=50? header.classList.add('shadow-header')
                     : header.classList.remove('shadow-header')
}

/*=============== HOME SWIPER ===============*/
let swiperHome = new Swiper('.home__swiper ', {
    loop: true,
    spaceBetween: -24,
    grabCursor: true,
    slidesPerView:'auto',
    centeredSlides:'auto',

    autoplay: {
        delay: 3000,
        disableonInteraction: false,
    },

    breakpoints: {
        1220: {
            spaceBetween: -32,
        }
    }
  })

/*=============== FEATURED SWIPER ===============*/
let swiperFeatured = new Swiper('.featured__swiper ', {
    loop: true,
    spaceBetween: 16,
    grabCursor: true,
    slidesPerView:'auto',
    centeredSlides:'auto',

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

    breakpoints: {
        1150: {
            slidesPerView: 4,
            centeredSlides: false,
        }
    }
  })

/*=============== NEW SWIPER ===============*/
let swiperNew = new Swiper('.new__swiper ', {
    loop: true,
    spaceBetween: 16,
    slidesPerView:'auto',
      
    breakpoints: {
        1150: {
            slidesPerView: 3,
        }
    }
  })

/*=============== TESTIMONIAL SWIPER ===============*/
let swiperTestimonial = new Swiper('.testimonial__swiper', {
    loop: true,
    spaceBetween: 16,
    grabCursor: true,
    slidesPerView:'auto',
    centeredSlides:'auto',

    breakpoints: {
        1150: {
            slidesPerView: 3,
            centeredSlides: false,
        }
    }
  })

/*=============== SHOW SCROLL UP ===============*/ 
 const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
             :scrollUp.classList.remove('show-scroll')
 }
 window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

    sections.forEach(curret =>{
        const sectionHeight = current.offsetHeight,
           sectionTop = curret.offsetTop - 58,
           sectionId = current.getAttribute('id'),
           sectionClass = document.querySelector('.nav__menu a[href*=' + sectionId +']')

        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionClass = classList.add('active-link')

        }else{
            sectionClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)
/*=============== DARK LIGHT THEME ===============*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-sun'

//previously selected topic(if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

//we obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'

/*=============== SCROLL REVEAL ANIMATION ===============*/
