const body = document.querySelector('body');
const toggleDarkMode = document.querySelector('.toggle-fill');
const sunIcon = document.querySelector('#sun');
const moonIcon = document.querySelector('#moon');

let saveTheme = JSON.parse(localStorage.getItem('theme')) || [];

function saveThemeToLocalStorage() {
    localStorage.setItem('theme', JSON.stringify(saveTheme));
}

toggleDarkMode.addEventListener('click', switchTheme);

function switchTheme() {
    saveTheme = [];
    if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
        sunIcon.src = "assets/img/sun.svg";
        moonIcon.src = "assets/img/moon.svg";
        saveTheme.push({
            theme: 'light'
        });
        saveThemeToLocalStorage();
    } else {
        body.classList.add('dark-mode');
        sunIcon.src = "assets/img/dark-mode-sun.svg";
        moonIcon.src = "assets/img/dark-mode-moon.svg";
        saveTheme.push({
            theme: 'dark'
        });
        saveThemeToLocalStorage();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    if (saveTheme.length > 0) {
        const currentTheme = saveTheme[0].theme;
        if (currentTheme === 'light') {
            body.classList.remove('dark-mode');
            sunIcon.src = "assets/img/sun.svg";
            moonIcon.src = "assets/img/moon.svg";
        } else if (currentTheme === 'dark') {
            body.classList.add('dark-mode');
            sunIcon.src = "assets/img/dark-mode-sun.svg";
            moonIcon.src = "assets/img/dark-mode-moon.svg";
        }
    }
});
