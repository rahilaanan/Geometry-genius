

function calculateRhombusArea(){
const rhombusD1 = rhombusInput('rhombus-d1');
console.log(rhombusD1);
const rhombusD2 = rhombusInput('rhombus-d2');
console.log(rhombusD2);

const area = rhombusD1 * rhombusD2;
console.log(area);

}

function rhombusInput(inputId){
    const inputField = document.getElementById(inputId);
    const inputText= inputField.value;
    const input = parseFloat(inputText);
    return input;
}