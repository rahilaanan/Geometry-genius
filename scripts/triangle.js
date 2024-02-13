/* 
. 
*/

function calculateTriangleArea(){
const triangleBase = document.getElementById('triangle-base');
const triangleBaseText = triangleBase.value;
const base = parseFloat(triangleBaseText);

const triangleHeight = document.getElementById('triangle-height');
const triangleHeightText = triangleHeight.value;
const height = parseFloat(triangleHeightText);

//calculate the area

const area = 0.5 * base*height;
console.log("THE AREA IS :", area);

//display the area on the screen

/* const triangleArea = document.getElementById('area-output');
triangleArea.innerText = area; */

}