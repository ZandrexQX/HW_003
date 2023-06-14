
let count = 0;
function getRandomColor() {
    let color = '#';
    let variant = '0123456789ABCDEF';

    for (let i = 0; i < 6; i++) {
        color += variant[Math.floor(Math.random() * 16)];
    }
    return color;
}
function chanchedColor() {
    // получаем массив
    let box = document.getElementsByClassName('box');
    let title = document.getElementsByClassName('title');
    // получаем первый элемент
    let el1 = box[0];
    let el2 = title[0];
    let randColor = getRandomColor();
    let randColorText = getRandomColor();
    el1.style.cssText=`background-color: ${randColor};`;
    el2.style.cssText=`color: ${randColorText};`;
}

let btn = document.getElementById('btn');
btn.addEventListener('click', chanchedColor);
