var myGif;

function preload() {
    myGif = loadImage('./assets/johntravolta.gif');
}

function setup() {
    createCanvas(windowWidth,windowHeight);
    colorMode(HSB, 255);
    angleMode(DEGREES);
    frameRate(12);
    setMoveThreshold(2);
    setShakeThreshold(10);
}

function draw() {
    var customBrightness = map(rotationZ, 0, 360, 255, 0);
    var customHue = map(rotationX, -180, 180, 255, 0);
    var customSaturation = map(rotationY, -90, 90, 255, 0);
    var bgcolor = color(customHue, customSaturation, customBrightness);
    background(bgcolor);
    
    image(myGif, width/2-190, height/2-100, myGif.width, myGif.height); 
}

function deviceMoved() {
    myGif.filter("invert");
}

function deviceShaken() {
    fill(0);
    textSize(40);
    text('Viiincent', 100, height/5);
}