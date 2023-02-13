// NAVABR
const   menuHarmburger = document.querySelector(".menu_harmburger");
        side_menu_container = document.querySelector(".side_menu_container"),
        side_menu = document.querySelector(".side_menu"),
        mobile_active = document.querySelector(".mobile_active");

const  body_stack = document.querySelector(".body_stack");

  


// TOGGLE NAVBAR 
menuHarmburger.addEventListener("click", (e)=>{

  side_menu_container.classList.toggle("close");

  body_stack.style = "overflow-y : hidden";

	});

  mobile_active.addEventListener("click", (e)=>{

    side_menu_container.classList.toggle("close");

    body_stack.style = "overflow-y : scroll";

   });



// CONTACT FORM
const contact_form = document.querySelector(".contact_form"),
      form_harmbuger = document.querySelector(".form_harmbuger"),
      open_contact_form = document.querySelector(".open_contact_form");


// OPEN CONTACT FORM 

open_contact_form.addEventListener("click", (e)=>{

  contact_form.classList.toggle("close_form");


	});

  form_harmbuger.addEventListener("click", (e)=>{

    contact_form.classList.toggle("close_form");


   });





// Header On scroll events
const header = document.querySelector(".scroll_header");
const fixed_header = document.querySelector(".fixed_header");

// SEARCH INPUT
const search_icon = document.querySelector(".search_icon");
const search_container = document.querySelector(".search_container");


const sectionOne = document.querySelector(".header_banner_container");
const sectionOneOptions = {
  rootMargin: "-300px 0px 0px 0px"
};

const sectionOneObserver = new IntersectionObserver(function(
  entries,
  sectionOneObserver
) {  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      header.classList.add("scrolled");
      fixed_header.classList.add("remove_fixed_header");
    } else {
      header.classList.remove("scrolled");
      fixed_header.classList.remove("remove_fixed_header");

    }
  });
},
sectionOneOptions);

sectionOneObserver.observe(sectionOne);

search_icon.addEventListener("click", function(e){

  search_container.classList.toggle("hidden");
  
})



// Initialize Swiper 
var swiper = new Swiper(".testimonial", {
  pagination: {
    el: ".swiper-pagination",
    grabCursor: true,
    loop: true,
    clickable: true,
  },
});


var swiper = new Swiper(".directors", {
  pagination: {
    el: ".swiper-pagination",
    grabCursor: true,
    clickable: true,   
    loop: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },
});