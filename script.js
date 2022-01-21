var typed = new Typed('.typed-words', {
    strings: ["Scripts","Websites"," Mobile Apps"],
    typeSpeed: 80,
    backSpeed: 80,
    backDelay: 4000,
    startDelay: 1000,
    loop: true,
    showCursor: true
});
const navbar = document.getElementById('navbar')
navbar.addEventListener('scroll',() =>{
    navbar.classList.add('fixed-top')
})