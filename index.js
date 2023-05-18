// toggle icon
const toggle = document.getElementById('toggle');
const ul = document.querySelector('.ul-mobile');
const span1 = document.querySelectorAll('.toggle > span')[0];
const span2 = document.querySelectorAll('.toggle > span')[1];
const span3 = document.querySelectorAll('.toggle > span')[2];

toggle.addEventListener('click',() => {
    ul.classList.toggle('active');
    span1.classList.toggle('active1');
    span2.classList.toggle('active2');
    span3.classList.toggle('active3');
});


