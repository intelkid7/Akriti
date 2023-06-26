burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navlist = document.querySelector('.navlist')
servicediv = document.querySelector('.services div')
// burger = document.querySelector('.burger')

burger.addEventListener('click', ()=>{
    navbar.classList.toggle('hnav');
    navlist.classList.toggle('visibility');
    burger.classList.toggle('burger');
})



