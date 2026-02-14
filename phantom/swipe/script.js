var initialTouchX, initialTouchY,
 finalTouchX, finalTouchY;
var swipeThreshold = 100; 
var dynamicStyle = 
document.createElement("style");
document.body.
appendChild(dynamicStyle);


function handleTouch(startX, endX,
     onSwipeLeft, onSwipeRight) {
    var horizontalDistance = 
    finalTouchX - initialTouchX;
    var verticalDistance = 
    finalTouchY - initialTouchY;

    if (Math.abs(horizontalDistance) >
     Math.abs(verticalDistance) &&
      Math.abs(horizontalDistance) >
       swipeThreshold) {
        if (finalTouchX - 
            initialTouchX < 0) {
            onSwipeLeft(); 
        } else {
            onSwipeRight(); 
        }
    }
}


var swipeLeft = () => {
    dynamicStyle.innerHTML = 
    "h3:before{content:'You swiped left!'}";
    document.querySelector('.container').
    style.background = '#D8335B';
};

var swipeRight = () => {
    dynamicStyle.innerHTML = 
    "h3:before{content:'You swiped right!'}";
    document.querySelector('.container').
    style.background = '#2C82C9';
};


window.onload = function () {
    window.addEventListener
    ('touchstart', function (event) {
        initialTouchX = 
        event.touches[0].clientX;
        initialTouchY =
         event.touches[0].clientY;
    });

    window.addEventListener
    ('touchend', function (event) {
        finalTouchX = event.
        changedTouches[0].clientX;
        finalTouchY = event.
        changedTouches[0].clientY;

        
        handleTouch(initialTouchX,
        finalTouchX, swipeLeft, swipeRight);
    });
};
