// Video
let video;

// To store the classification
let label = "waiting...";

// Model URL
let imageModelURL = 'https://teachablemachine.withgoogle.com/models/fkEC6Y0O8/';

let classifier;

let car;

let obs;

// Load the model first
function preload() {
  carImg = loadImage('car.png');
  classifier = ml5.imageClassifier(imageModelURL + 'model.json'); 
}
function setup() {
  createCanvas(680, 400);
  video = createCapture(VIDEO);
  video.hide();
  frameRate(60);
  // Start classifying
  classifyVideo();
  car = new Car();
  obs = new Obs();
}


function control() {
  if (label === 'left') {
    car.setDir(-5, 0);
  } 
  else if (label === 'right') {
    car.setDir(5, 0);
  }  
}

function draw() {
  background(255, 255, 0);
  //image(video, 0, 0);
  textSize(32);
  fill(0);
  text(label, 10, 50);
  text(score, 600, 50);
  car.update();
  car.show();
  obs.update();
  obs.show();
  if (car.collide(obs) || car.hitWall()){
    background(255, 255, 0);
    textSize(32);
    fill(0);
    text(score, 340, 200);
    noLoop();
  }
  
}

function getRandom(min, max) {
    return Math.random() * (max - min) + min;
}

// Get a prediction for the current video frame
function classifyVideo() {
  classifier.classify(video, gotResult);
}  
  
function gotResult(error, results) {
  // If there is an error
  if (error) {
    console.error(error);
    return;
  }
  // The results are in an array ordered by confidence.
  // console.log(results[0]);
  label = results[0].label;
  control();
  // Classifiy again!
  classifyVideo();
}


