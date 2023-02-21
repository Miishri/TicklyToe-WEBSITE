const startContainer: HTMLDivElement = <HTMLDivElement>document.querySelector('.welcome');
const startScreen: 	HTMLDivElement = <HTMLDivElement>document.querySelector('.startText');

startScreen.addEventListener('click', () => {
    startContainer.setAttribute('style', 'visibility: hidden;');
})