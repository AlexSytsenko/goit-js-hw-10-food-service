const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const switchThemeRef = document.querySelector('#theme-switch-toggle');
const bodyRef = document.body;
const savedTheme = localStorage.getItem('theme');

checkLocalStorage();

switchThemeRef.addEventListener('change', handlerSwitch);

function handlerSwitch() {
    // bodyRef.classList.contains(Theme.LIGHT) ? setDarkTheme() : setLightTheme();
    switchThemeRef.checked === true ? setDarkTheme() : setLightTheme();
}

function checkLocalStorage() {
    if (savedTheme === Theme.DARK) {
        bodyRef.classList.add(Theme.DARK);
        switchThemeRef.checked = true;
        return;
    }
    bodyRef.classList.add(Theme.LIGHT); 
}

function setLightTheme() {
    bodyRef.classList.replace(Theme.DARK, Theme.LIGHT);
    localStorage.setItem('theme', Theme.LIGHT);
}

function setDarkTheme() {
    bodyRef.classList.replace(Theme.LIGHT, Theme.DARK);
    localStorage.setItem('theme', Theme.DARK);
}
