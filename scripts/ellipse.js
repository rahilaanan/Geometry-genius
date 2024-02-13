function calculateEllipseArea(){
    const ellipseP = ellipseInput ('ellipse-p');
    console.log(ellipseP);
    const ellipseB = ellipseInput ('ellipse-b');
    console.log(ellipseB);
    
    const area = 3.14 * ellipseP * ellipseB;
    console.log(area);
}

function ellipseInput (inputId){
    const inputField = document.getElementById(inputId);
    const inputText =inputField.value;
    const input =parseFloat(inputText);
    return input;
}