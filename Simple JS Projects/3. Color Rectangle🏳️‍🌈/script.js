//Q.Make a rectangle and when we move mouse on that rectangle on the left side we want to gradually change the color of the rectangle to red 
// and when we move mouse to the right side we want to change the color blue 

//1.Calculate Mouse is enter on rectangle and moved? 
//2.Calculate that mouse is on left from center or right from center?  
//3.Calculate that how much far we're at left from center, more on the left side then increase color intensity(red). Same for right side also
//4.Calculate, when mouse is slowly go to center, both the value of red and blue becomes zero (white color)


var rect = document.querySelector('#center');
var maxColorValue = 255; // Maximum color value
var transitionDuration = 1; // Duration of color transition in seconds

rect.addEventListener('mousemove', function (details) {
  var rectLocation = rect.getBoundingClientRect();
  var insideRectVal = details.clientX - rectLocation.left;
  var center = rectLocation.width / 2;

  // Calculate the color values based on the mouse position relative to the center.
  var redValue = (insideRectVal <= center)
    ? maxColorValue
    : maxColorValue - (maxColorValue * ((insideRectVal - center) / center));
  var blueValue = (insideRectVal >= center)
    ? maxColorValue
    : maxColorValue - (maxColorValue * ((center - insideRectVal) / center));

  // Ensure the color values are within the valid range.
  redValue = Math.max(0, Math.min(maxColorValue, redValue));
  blueValue = Math.max(0, Math.min(maxColorValue, blueValue));

  // Calculate the white color value for the center.
  var whiteValue =
    255 - Math.abs(insideRectVal - center); // Ensure the white color value is within the valid range.
  whiteValue = Math.max(0, Math.min(maxColorValue, whiteValue));

  // Update the background color of the rectangle with a linear transition.
  gsap.to(rect, {
    backgroundColor: `rgb(${redValue}, ${whiteValue}, ${blueValue})`,
    duration: transitionDuration,
    ease: Power4
  });
});

// When the mouse leaves the rectangle, reset the background color to white with a linear transition.
rect.addEventListener('mouseleave', function () {
  gsap.to(rect, {
    backgroundColor: 'white',
    duration: transitionDuration,
    ease: Power4
  });
});
