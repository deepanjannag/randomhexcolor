let hexArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];


document.querySelector('a').addEventListener('click', changeColor);

function changeColor() {
    let hexCode = '#';
    for (let i = 0; i < 6; i++) {
        let randomIndex = Math.floor(Math.random() * hexArray.length);
        hexCode += hexArray[randomIndex];
    }
    document.querySelector('span').innerText = hexCode;
    document.body.style.backgroundColor = hexCode;
}