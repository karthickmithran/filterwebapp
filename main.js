nose_x=0
nose_y=0
//nose_a=0
//nose_b=0

function preload() {
  mustache = loadImage('https://i.postimg.cc/3x3QzSGq/m.png');
 // lipstick = loadImage('https://i.postimg.cc/PxFvYgkv/l1.png');
}

function setup() {  
canvas = createCanvas(300, 300);
canvas.center();
video = createCapture(VIDEO);
video.size(300, 300);
video.hide();
poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);}

function Take_snapshot(){
save('myFilterImage.png');
}

function modelLoaded(){
    console.log('PoseNet is now initilized ');
}

function gotPoses(results){
if (results.length>0)
{
  console.log(results);
  console.log("nose x = " + results[0].pose.nose.x);
  console.log("nose y = " + results[0].pose.nose.y);
  nose_x = results[0].pose.nose.x-28;
  nose_y = results[0].pose.nose.y+5;
 // nose_a = results[0].pose.nose.x-15;
 // nose_b = results[0].pose.nose.y+25;
}
}

function draw() {  
  image(video, 0, 0, 300, 300);
  image(mustache, nose_x, nose_y, 60, 30);
  //image(lipstick, nose_a, nose_b, 35, 15);
  //circle(nose_x, nose_y, 30);
  //fill(0,255,0);
  }