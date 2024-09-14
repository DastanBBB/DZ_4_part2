function trafficLight(color) {
    const redLight = document.getElementById('red');
    const yellowLight = document.getElementById('yellow');
    const greenLight = document.getElementById('green');
    const message = document.getElementById('message');

    //Сброс
    redLight.style.backgroundColor = 'grey';
    yellowLight.style.backgroundColor = 'grey';
    greenLight.style.backgroundColor = 'grey';
    message.innerHTML = '';

    if (color === 'красный') {
        redLight.style.backgroundColor = 'red';
        message.innerHTML = 'STOP';
    } else if (color === 'желтый') {
        yellowLight.style.backgroundColor = 'yellow';
        message.innerHTML = 'WAIT';
    } else if (color === 'зеленый') {
        greenLight.style.backgroundColor = 'green';
        message.innerHTML = 'GO';
    } else {
        alert('Введите правильный цвет!!!');
    }
}
const userInput = prompt("Введите цвет светофора: красный, желтый, зеленый").toLowerCase();
trafficLight(userInput);