noseX = 0;
noseY = 0;

function preload() {
    clowNose = loadImage('https://i.postimg.cc/zGdCd9d5/nariz-removebg-preview.png');
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Instialized');
}

function draw() {
    image(video, 0, 0, 300, 300);
    circle(noseX, noseY, 20);
    fill(209,43,43);
    stroke(182,44,44);
    image(clowNose, noseX -14, noseY -14, 30, 30);
}

function takeSnapshot() {
    save('myFilterImage.png');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
    }
}

