const toggleThemeButton = document.querySelector('#toggle-theme-button');
const toggleThemeButtonImage = document.querySelector('.image-button');
const body = document.querySelector('body');

toggleThemeButton.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  if(body.classList.contains('dark-mode')) {
    toggleThemeButtonImage.setAttribute('src', './src/img/sun.png');
  } else {
    toggleThemeButtonImage.setAttribute('src', './src/img/moon.png');
  }
});