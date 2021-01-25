const colorButton = document.querySelector('.colorButton');
const bodyBackground = document.querySelector('body');
const colors = ['pink', 'mint', 'purple', 'teal'];

colorButton.addEventListener('click', changeColor);

function changeColor(){
let random = Math.floor(Math.random()*colors.length)
bodyBackground.style.backgroundColor = colors[random];
}