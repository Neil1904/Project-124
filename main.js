function setup() {
    video = createCapture(VIDEO);
    video.size(550, 450);

    canvas = createCanvas(550, 420);
    canvas.position(550, 80);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotposes);
}

function modelLoaded() {
    console.log('PoseNet is initialized');
}

function gotposes(results) {
    if (results > 0) {
        console.log(results);
    }
}
