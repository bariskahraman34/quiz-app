const body = document.querySelector('body');
const toggleDarkMode = document.querySelector('.toggle-fill');
const sunIcon = document.querySelector('#sun');
const moonIcon = document.querySelector('#moon');

toggleDarkMode.addEventListener('click',function(){
    if(body.classList.contains('dark-mode')){
        body.classList.remove('dark-mode');
        sunIcon.src = "assets/img/sun.svg";
        moonIcon.src = "assets/img/moon.svg";
    }else{
        body.classList.add('dark-mode');
        sunIcon.src = "assets/img/dark-mode-sun.svg";
        moonIcon.src = "assets/img/dark-mode-moon.svg";
    }
})