const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.querySelector('#nav');
const toggleIcon = document.querySelector('#toggle-icon');
const image1 = document.querySelector('#image1');
const image2 = document.querySelector('#image2');
const image3 = document.querySelector('#image3');
const textBox = document.querySelector('#text-box');

function toggleDarkLightMode(mode) {

    localStorage.setItem('theme', mode);
    document.documentElement.setAttribute('data-theme', mode);
    image1.src = `img/undraw_proud_coder_${mode}.svg`;
    image2.src = `img/undraw_feeling_proud_${mode}.svg`;
    image3.src = `img/undraw_conceptual_idea_${mode}.svg`;
    toggleIcon.children[0].textContent = `${mode.charAt(0).toUpperCase() + mode.slice(1)} Mode`;
    nav.style.backgroundColor = (mode ==='light') ? 'rgb(255 255 255 / 50%)' : 'rgb(0 0 0 / 50%)';
    textBox.style.backgroundColor = (mode ==='light') ? 'rgb(0 0 0 / 50%)' : 'rgb(255 255 255 / 50%)';
    (mode ==='light') ? toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun') : toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon');
}

function switchTheme(e) {
    //e.target.checked - for checking the status of checkbox
    (e.target.checked)?  toggleDarkLightMode('dark'): toggleDarkLightMode('light');
}

// Event Listener
toggleSwitch.addEventListener('change', switchTheme);

//Check Local Storage for Current theme
const currentTheme = localStorage.getItem('theme');

if (currentTheme && currentTheme === 'dark') {
    toggleSwitch.checked = true;
    toggleDarkLightMode('dark');
}