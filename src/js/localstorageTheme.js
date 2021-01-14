const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const inputRef = document.querySelector('#theme-switch-toggle');
const bodyRef = document.querySelector('body');

checkLocalStorage();

inputRef.addEventListener('change', handleInput);

function handleInput() {

    if (bodyRef.classList.contains(Theme.LIGHT)) {
        setDarkTheme();
        removeLightTheme();
        

        localStorage.setItem('theme', Theme.DARK);
        return;
    } 
    setLightTheme();
    removeDarkTheme();
    
    localStorage.setItem('theme', Theme.LIGHT);
}

function checkLocalStorage() {

    const theme = localStorage.getItem('theme');

    if (theme === Theme.DARK) {
        removeLightTheme();
        setDarkTheme();
        inputRef.checked = true;
    }
}

function setLightTheme() {
    bodyRef.classList.add(Theme.LIGHT);
}

function setDarkTheme() {
    bodyRef.classList.add(Theme.DARK);
}

function removeLightTheme() {
    bodyRef.classList.remove(Theme.LIGHT);
}

function removeDarkTheme() {
    bodyRef.classList.remove(Theme.DARK);
}
