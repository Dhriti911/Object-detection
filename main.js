img = "";
status = "";
objects = [];

function preload() {
img = loadImage('dog_cat.jpg');
}

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function draw() {
    image(img, 0 ,0, 640, 420);

    
    fill("#25a6d9");
    text("Dog", 45, 75);
    noFill();
    stroke("#25a6d9");
    rect(30, 60, 450, 350);

    fill("#25a6d9");
    text("Cat", 320, 120);
    noFill();
    stroke("#25a6d9")
rect(300, 90, 270, 320);
}

function modelLoaded() {
    console.log("Model Loaded!")
    status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.log(error);
     }
    console.log(results);
    objects = results; 

    if(status !="")
    {
    for (i = 0; i < objects.length; i++) {
        document.getElementById("status").innerHTML = "Status : Object Detected";

        fill("#25a6d9");
        percent = floor(objects[i].label + " " + percent + "%", objects[i].objects[i].height);
        text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y+ 15);
    noFill();
    stroke("#25a6d9");
    rect(objects[i].x, objects[i].width, objects[i].height);
    }
    }
}
