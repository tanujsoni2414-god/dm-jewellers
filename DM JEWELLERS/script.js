// LOADER

window.addEventListener("load",()=>{

document.getElementById("loader").style.display="none";

});

// SCROLL PROGRESS

window.addEventListener("scroll",()=>{

let scrollTop=document.documentElement.scrollTop;

let scrollHeight=
document.documentElement.scrollHeight-
document.documentElement.clientHeight;

let progress=(scrollTop/scrollHeight)*100;

document.getElementById("progress-bar").style.width=
progress+"%";

});

// COUNTERS

const counters=document.querySelectorAll(".counter");

counters.forEach(counter=>{

const update=()=>{

const target=+counter.getAttribute("data-target");

const count=+counter.innerText;

const increment=target/100;

if(count<target){

counter.innerText=Math.ceil(count+increment);

setTimeout(update,20);

}else{

counter.innerText=target;

}

};

update();

});

// TESTIMONIAL SLIDER

const testimonials=
document.querySelectorAll(".testimonial");

let current=0;

setInterval(()=>{

testimonials[current].classList.remove("active");

current=(current+1)%testimonials.length;

testimonials[current].classList.add("active");

},3000);

// DARK MODE

const darkBtn=document.getElementById("darkMode");

darkBtn.addEventListener("click",()=>{

document.body.classList.toggle("dark-mode");

});

// BACK TO TOP

const topBtn=document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,
behavior:"smooth"

});

});

// FORM VALIDATION

const form=document.querySelector("form");

if(form){

form.addEventListener("submit",(e)=>{

let inputs=form.querySelectorAll("input[required]");

let valid=true;

inputs.forEach(input=>{

if(input.value.trim()===""){

valid=false;

}

});

if(!valid){

e.preventDefault();

alert("Please fill all required fields");

}

});

}
// COLLECTION FILTER

const filterBtns =
document.querySelectorAll(".filter-btn");

const cards =
document.querySelectorAll(".product-card");

filterBtns.forEach(btn=>{

btn.addEventListener("click",()=>{

document
.querySelector(".filter-btn.active")
.classList.remove("active");

btn.classList.add("active");

let filter=
btn.getAttribute("data-filter");

cards.forEach(card=>{

if(
filter==="all" ||
card.classList.contains(filter)
){

card.style.display="block";

}else{

card.style.display="none";

}

});

});

});

// SEARCH

const searchInput =
document.getElementById("searchInput");

if(searchInput){

searchInput.addEventListener("keyup",()=>{

let value=
searchInput.value.toLowerCase();

cards.forEach(card=>{

let text=
card.innerText.toLowerCase();

card.style.display=
text.includes(value)
? "block"
: "none";

});

});

}
/* =========================
   GALLERY FILTER
========================= */

const galleryBtns =
document.querySelectorAll(".gallery-btn");

const galleryItems =
document.querySelectorAll(".gallery-item");

galleryBtns.forEach(btn=>{

btn.addEventListener("click",()=>{

document
.querySelector(".gallery-btn.active")
.classList.remove("active");

btn.classList.add("active");

let filter =
btn.getAttribute("data-gallery");

galleryItems.forEach(item=>{

if(
filter==="all" ||
item.classList.contains(filter)
){

item.style.display="block";

}else{

item.style.display="none";

}

});

});

});

/* =========================
   LIGHTBOX
========================= */

const galleryImages =
document.querySelectorAll(".gallery-item img");

const lightbox =
document.getElementById("lightbox");

const lightboxImage =
document.getElementById("lightboxImage");

const closeLightbox =
document.getElementById("closeLightbox");

galleryImages.forEach(img=>{

img.addEventListener("click",()=>{

lightbox.style.display="flex";

lightboxImage.src =
img.src;

});

});

if(closeLightbox){

closeLightbox.addEventListener("click",()=>{

lightbox.style.display="none";

});

}

if(lightbox){

lightbox.addEventListener("click",(e)=>{

if(e.target===lightbox){

lightbox.style.display="none";

}

});

}

/* =========================
   SCROLL REVEAL
========================= */

function revealElements(){

const reveals =
document.querySelectorAll(".reveal");

reveals.forEach(item=>{

const windowHeight =
window.innerHeight;

const top =
item.getBoundingClientRect().top;

if(top < windowHeight - 100){

item.classList.add("active");

}

});

}

window.addEventListener(
"scroll",
revealElements
);

revealElements();
/* =======================
   TESTIMONIALS SLIDER
======================= */

const reviews =
document.querySelectorAll(".review");

let reviewIndex = 0;

if(reviews.length){

setInterval(()=>{

reviews[reviewIndex]
.classList.remove("active-review");

reviewIndex++;

if(reviewIndex >= reviews.length){

reviewIndex = 0;

}

reviews[reviewIndex]
.classList.add("active-review");

},4000);

}
/* =======================
   FAQ ACCORDION
======================= */

const faqQuestions =
document.querySelectorAll(".faq-question");

faqQuestions.forEach(question=>{

question.addEventListener("click",()=>{

const faq =
question.parentElement;

faq.classList.toggle("active");

});

});

/* =======================
   FAQ SEARCH
======================= */

const faqSearch =
document.getElementById("faqSearch");

if(faqSearch){

faqSearch.addEventListener("keyup",()=>{

const value =
faqSearch.value.toLowerCase();

const faqItems =
document.querySelectorAll(".faq-item");

faqItems.forEach(item=>{

const text =
item.innerText.toLowerCase();

item.style.display =
text.includes(value)
? "block"
: "none";

});

});

}
/* ======================
   MOBILE MENU
====================== */

const mobileBtn =
document.getElementById("mobileBtn");

const navLinks =
document.querySelector(".nav-links");

if(mobileBtn){

mobileBtn.addEventListener("click",()=>{

navLinks.classList.toggle(
"mobile-active"
);

});

}

/* ======================
   CONTACT FORM
====================== */

const contactForm =
document.getElementById("contactForm");

if(contactForm){

contactForm.addEventListener(
"submit",
(e)=>{

e.preventDefault();

alert(
"Thank you for contacting DM Jewellers. We will get back to you soon."
);

contactForm.reset();

});

}

/* ======================
   NEWSLETTER
====================== */

const newsletterForm =
document.querySelector(
".newsletter-form"
);

if(newsletterForm){

newsletterForm.addEventListener(
"submit",
(e)=>{

e.preventDefault();

alert(
"Subscribed Successfully!"
);

newsletterForm.reset();

});

}

/* ======================
   SAVE DARK MODE
====================== */

const darkToggle =
document.getElementById("darkMode");

if(localStorage.getItem("theme")==="dark"){

document.body.classList.add(
"dark-mode"
);

}

if(darkToggle){

darkToggle.addEventListener(
"click",
()=>{

if(
document.body.classList.contains(
"dark-mode"
)
){

localStorage.setItem(
"theme",
"dark"
);

}else{

localStorage.setItem(
"theme",
"light"
);

}

});

}
