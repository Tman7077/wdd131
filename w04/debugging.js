const pi = 3.14;
let area = 0;

function circleArea(radius) {
  const area = radius * radius * pi;
  return area;
}

area = circleArea(3);
console.log("Area when r=3:", area);
area = circleArea(4);
console.log("Area when r=4:", area);