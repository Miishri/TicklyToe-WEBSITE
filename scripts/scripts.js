var startContainer = document.querySelector('.welcome');
var startScreen = document.querySelector('.startText');
startScreen.addEventListener('click', function () {
    startContainer.setAttribute('style', 'visibility: hidden;');
});
