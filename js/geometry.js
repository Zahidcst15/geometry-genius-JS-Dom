function calculateTriangleArea(){
    // Triangle base value
    const triangleBaseInput = document.getElementById('Triangle-base');
    const triangleBaseValue = triangleBaseInput.value;
    const base = parseFloat (triangleBaseValue);

    // Triangle height value
    const triangleHeightInput = document.getElementById('Triangle-height');
    const triangleHeightValue = triangleHeightInput.value;
    const height = parseFloat (triangleHeightValue);

    // calculate Triangle area
    const area = 0.5 * base * height;

    // display Triangle area
    const triangleAreaSpan = document.getElementById('triangle-area');
    triangleAreaSpan.innerText = area;
}

function calculateRectangleArea(){
    // Rectangle length value
    const rectangleLengthInput = document.getElementById('rectangle-length');
    const rectangleLengthValue = rectangleLengthInput.value;
    const rectangleLength = parseFloat (rectangleLengthValue);

    // rectangle width value
    const rectangleWidthInput = document.getElementById('rectangle-width');
    const rectangleWidthValue = rectangleWidthInput.value;
    const rectangleWidth = parseFloat (rectangleWidthValue);

    // calculate rectangle area
      const rectangleArea = rectangleLength * rectangleWidth;

    
    // display rectangle area
    const rectangleAreaSpan = document.getElementById('rectangle-area');
    rectangleAreaSpan.innerText = rectangleArea;

}