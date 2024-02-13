function calculateRectangleArea(){
    const rectangleWidth = document.getElementById('rectangle-width');
    const rectangleWidthText = rectangleWidth.value;
    const width = parseFloat(rectangleWidthText);
   
    const rectangleHeight = document.getElementById('rectangle-length');
    const rectangleHeightText =  rectangleHeight.value;
    const height = parseFloat(rectangleHeightText);

    const area =width*height;
    console.log("THE AREA IS :", area);

    
}