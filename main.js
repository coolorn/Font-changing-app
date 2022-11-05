function setup() {
    video = createCaputure(VIDEO);
    video.size(55, 500);

    canvas = createCanvas(550, 550);
    canvas.posistion(560,150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses)
}

function modelLoaded() {
    console.log('PoseNet Is Initialized!');
}

function draw() {
    background('#969A97');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
    }
}