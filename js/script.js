function getInnerText (para) {
    const element = document.getElementById(para);
    const elementText = parseFloat(element.innerText);
    return elementText;
}

function getInputValue (id) {
    const input = document.getElementById(id);
    const inputValue = parseFloat(input.value);
    return inputValue;
}

function multiplications (w, h, half) {
    if (half == false) {
        const multiplicationTwo = w * h;
        return multiplicationTwo.toFixed(2)
    }
    const multiplicationThree = w * h * half;
    return multiplicationThree.toFixed(2);
}

