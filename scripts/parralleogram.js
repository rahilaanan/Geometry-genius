

function calculateParallelogramArea(){
const base = getParallelogramInput ('parallelogram-base');
console.log(base);
const height = getParallelogramInput ('parallelogram-height');
console.log(height);
const area = base* height;
console.log(area);
}

function getParallelogramInput (pBase){
const baseInput = document.getElementById(pBase);
const baseText = baseInput.value;
const baseValue = parseFloat(baseText);
return baseValue;
}