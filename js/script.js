
let serial = 0;

function getInnerText (para) {
    const element = document.getElementById(para);
    const elementText = parseInt(element.innerText);
    return elementText;
}

function getInputValue (id) {
    const input = document.getElementById(id);
    const inputValue = parseInt(input.value);
    return inputValue;
}

function multiplications (w, h, half) {
    if (half == false) {
        const multiplicationTwo = w * h;
        return multiplicationTwo;
    }
    const multiplicationThree = w * h * half;
    return multiplicationThree;
}

function tablecreate(serial, name, area) {
    const tables = document.getElementById('calculate');
    const tr = document.createElement("tr");
    tr.innerHTML = `
        <td class="p-2">${serial}.</td>
        <td class="p-2">${name}</td>
        <td class="p-2">${area}cm<sup>2<sup></td>
        <td class="bg-blue-400 cursor-pointer rounded">Convert to m2</td>
    `;
    tables.appendChild(tr);
}



document.getElementById('triangle').addEventListener('click', function(){
    const triangleWidth = getInputValue ('triangle-width');
    const triangleHeight = getInputValue('trianlge-height');
    const triangleHalf = getInnerText ('triangle-half');
    if (triangleWidth == '' || triangleHeight == '' || triangleHeight < 0 || triangleWidth < 0 || isNaN(triangleWidth) || isNaN(triangleHeight)) {
        alert('please provide a valid number');
        return;
    }

    serial += 1; 
    const triangle = multiplications (triangleWidth, triangleHeight, triangleHalf);
    const triangleString = parseInt(triangle)
    const triangleName = document.getElementById('triangle-header').innerText;
    tablecreate(serial, triangleName, triangleString);
})

document.getElementById('rectangle').addEventListener('click', function(){
    const rectangleWidth = getInputValue('rectangle-width');
    const rectangleHeight = getInputValue('rectangle-height');
    if (rectangleWidth == '' || rectangleHeight == '' || rectangleHeight < 0 || rectangleWidth < 0 || isNaN(rectangleWidth) || isNaN(rectangleHeight)) {
        alert('please provide a valid number');
        return;
    }
    serial += 1;

    const rectangleName = document.getElementById('rectangle-name').innerText;
    const rectangle = multiplications (rectangleWidth, rectangleHeight, false);
    tablecreate(serial, rectangleName, rectangle);
})

document.getElementById('parallelogram').addEventListener('click', function(){
    const parallelogramWidth = getInputValue('parallelogram-width');
    const parallelogramHeight = getInputValue('parallelogram-height');
    if (parallelogramWidth == '' || parallelogramHeight == '' || parallelogramHeight < 0 || parallelogramWidth < 0 || isNaN(parallelogramWidth) || isNaN(parallelogramHeight)) {
        alert('please provide a valid number');
        return;
    }

    serial += 1;
    const parallelogramName = document.getElementById('parallelogram-name').innerText

    const parallelogram = multiplications(parallelogramWidth, parallelogramHeight, false);
    tablecreate(serial, parallelogramName, parallelogram);
})

document.getElementById('rombus').addEventListener('click', function(){
    const rombusWidth = getInputValue('rombus-width');
    const rombusHeight = getInputValue('rombus-height');

    if (rombusWidth == '' || rombusHeight == '' || rombusHeight < 0 || rombusWidth < 0 || isNaN(rombusWidth) || isNaN(rombusHeight)) {
        alert('please provide a valid number');
        return;
    }
    serial += 1;

    const rombusName = document.getElementById('rhombus-name').innerText;
    const rombus = multiplications(rombusWidth, rombusHeight, false);
    tablecreate(serial, rombusName, rombus);
})

document.getElementById('pentagon').addEventListener('click', function(){
    const pentagonWidth = getInputValue('pentagon-width');
    const pentagonHeight = getInputValue('pentagon-height');
    if (pentagonWidth == '' || pentagonHeight == '' || pentagonHeight < 0 || pentagonWidth < 0 || isNaN(pentagonWidth) || isNaN(pentagonHeight)) {
        alert('please provide a valid number');
        return;
    }
    serial += 1;

    const pentagonName = document.getElementById('pentagon-name').innerText;
    const pentagon = multiplications(pentagonWidth, pentagonHeight, false);
    tablecreate(serial, pentagonName, pentagon);
})

document.getElementById('ellipse').addEventListener('click', function(){
    const ellipseWidth = getInputValue('ellipse-width');
    const ellipseHeight = getInputValue('ellipse-height');

    if (ellipseWidth == '' || ellipseHeight == '' || ellipseHeight < 0 || ellipseWidth < 0 || isNaN(ellipseWidth) || isNaN(ellipseHeight)) {
        alert('please provide a valid number');
        return;
    }
    serial += 1;

    const pi = parseFloat(3.1416);
    const ellipseName = document.getElementById('ellipse-name').innerText;
    const ellipse = multiplications(ellipseWidth, ellipseHeight, pi).toFixed(2);
    tablecreate(serial, ellipseName, ellipse);
})

const cards = document.getElementsByClassName('card');
for (const card of cards){
    card.addEventListener('mouseenter', function(){
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        card.style.backgroundColor = "#" + randomColor;
        color.innerHTML = "#" + randomColor;
    })
}
