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
    console.log('area of the triangle is:', area)

    // display Triangle area
    const triangleAreaSpan = document.getElementById('triangle-area');
    triangleAreaSpan.innerText = area;
}