nose_x=0
nose_y=0

function preload() {
  clowNose=loadImage("nariz.webp")
}
function setup() {
  canvas=createCanvas(300,300);
  canvas.center();
  video=createCapture(VIDEO);
  video.size(300,300);
  video.hide();
  poseNet=ml5.poseNet(video,modelLoaded);
  poseNet.on("pose",gotPoses);
}
function modelLoaded() {
  console.log("pose net foi iniciado!");
}
function gotPoses(results) {
  if (results.length>0) {
    console.log(results)
    nose_x=results[0].pose.nose.x-50
    nose_y=results[0].pose.nose.y-40
    console.log("narizX= "+ nose_x)
    console.log("narizY= "+ nose_y)
  }
}
function takeSnapshot() {
  save("copag139.png")
}
function draw() {
  image(video,0,0,300,300)
  image(clowNose,nose_x,nose_y,90,90)
}