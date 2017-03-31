function roundUp(num) {
  //round num up and return it
  //code here
  return Math.pow(num, 2);
}
console.log(roundUp(2.4));

function getCircleArea(radius) {
  //return the rounded area of the circle given the radius
  //code here
  var area = 3.14 * Math.pow(radius, 2);
  return Math.round(area);
}

console.log(getCircleArea(3));

function getRectangularPrismVolume(length, width, height) {
  //return the area of the 3D rectangular prism given the length, width, and height
  //code here
  var area = length * width * height;
  return area;
}

console.log(getRectangularPrismVolume(3, 4, 2));