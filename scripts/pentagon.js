function calculatePentagonArea(){
const pentagonPeri = pentagonInput ('pentagon-peri');
console.log(pentagonPeri);
const penatgonApo = pentagonInput ('pentagon-apo');
console.log(penatgonApo);

const area = 0.5 * pentagonPeri * penatgonApo;
console.log(area);
}

function pentagonInput (inputId){
    const inputField = document.getElementById(inputId);
    const inputText =inputField.value;
    const perimeter =parseFloat(inputText);
    return perimeter;
}