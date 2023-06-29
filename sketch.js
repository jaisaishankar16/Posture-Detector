
let capture;
let posenet;
let reyeX,reyeY;
let leyeX,leyeY;
let noseX,noseY;
let singlePose,skeleton;



function setup(){
    createCanvas(3000,2000);
    capture = createCapture(VIDEO);
    capture.hide();

    posenet = ml5.poseNet(capture,modelLoaded);
    posenet.on('pose',receivedPoses)
}

function receivedPoses(poses){
    console.log(poses);
    if(poses.length>0){
        singlePose=poses[0].pose;
        skeleton = poses[0].skeleton;
        // noseX = singlePose.nose.x;
        // noseY = singlePose.nose.y;
        // leyeX = singlePose.leftEye.x;
        // leyeY = singlePose.leftEye.y;
        // reyeX = singlePose.rightEye.x;
        // reyeY = singlePose.rightEye.y;

    }
    console.log(noseX +" "+noseY)
}

function modelLoaded(){
    console.log("Model has loaded");
}

// function getRandomArbitrary(min,max){
//     return Math.random() * (max-min)+min;
// }

function draw(){
    // background(200);
    // // point
    // point(400,400);
    // //line
    // line(200,200,300,300);
    // // triangle
    // triangle(100,200,300,400,150,450);
    // //rectangular
    // rect(500,100,200,100);
    // //ellipse
    // ellipse(100,100,100,100);
     

    //stroke and color
    // fill(1,3,100,200);
    // stroke(255,0,0);  //rgb values
    // strokeWeight(3);
    // ellipse(100,200,100,100);
    // stroke(255,255,0);
    // ellipse(250,200,100,100);
    // stroke(0,255,255);
    // ellipse(400,200,100,100);
    // stroke(255,0,255);
    // ellipse(550,200,100,100);
    // stroke(0,0,255);
    // ellipse(700,200,100,100);


    //for drawing circlesbehind mouse
    // r=getRandomArbitrary(0,255);
    // g=getRandomArbitrary(0,255);
    // b=getRandomArbitrary(0,255);
    // fill(r,g,b);
    // ellipse(mouseX,mouseY,50,50);

    //images and videos(webcam)

    image(capture,0,0);
    fill(255,0,0);
    // ellipse(noseX,noseY,30,30);
    // ellipse(reyeX,reyeY,30,30);
    // ellipse(leyeX,leyeY,30,30);

    if (singlePose){

    for(let i=0; i<singlePose.keypoints.length; i++){
        ellipse(singlePose.keypoints[i].position.x, singlePose.keypoints[i].position.y,20);
    }
    stroke(255,255,255);
    strokeWeight(5);
    for(let j=0;j<skeleton.length;j++){
        line(skeleton[j][0].position.x, skeleton[j][0].position.y, skeleton[j][1].position.x, skeleton[j][1].position.y);
    }
}

}