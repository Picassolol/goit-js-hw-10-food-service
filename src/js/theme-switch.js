const toggleRef = document.querySelector('#theme-switch-toggle');
const bodyRef = document.body;

const currentTheme = localStorage.getItem('theme');

if(currentTheme === 'dark-theme') {
    toggleRef.setAttribute('checked', true);
}

if (!currentTheme) {
    bodyRef.classList.add('light-theme');
    localStorage.setItem('theme', 'light-theme');
} else {
    bodyRef.classList.add(currentTheme);
}

toggleRef.addEventListener('change', () => {

    if (bodyRef.classList.contains('light-theme')) {
        bodyRef.classList.replace('light-theme', 'dark-theme');
        localStorage.setItem('theme', 'dark-theme');
        console.log(localStorage.getItem('theme'));
    } else {
        bodyRef.classList.replace('dark-theme', 'light-theme');
        localStorage.setItem('theme', 'light-theme');
        console.log(localStorage.getItem('theme'));
    }
});