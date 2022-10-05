difference=0
rightWrist=0
leftWrist=0

function setup(){
    video= createCapture(VIDEO);
video.size(550,500)
video.position(300,200)
canvas= createCanvas(550,500)
canvas.position(1000,200)
poseNet= ml5.poseNet(video,modelLoaded)
poseNet.on('pose', gotPoses )
}
function draw(){
    background('#07f0dc')
    textSize(difference)
    fill('#f6ff00')
        text('font manipulator',50,400)
        document.getElementById("size").innerHTML= difference+ "px"
    }
    function modelLoaded(){
        console.log('poseNet is initialised')
    }
    function gotPoses(results){
        if(results.length>0){
            console.log(results)
            leftWrist= results[0].pose.leftWrist.x
            rightWrist= results[0].pose.rightWrist.x
            difference= floor(leftWrist-rightWrist)
        }
    }