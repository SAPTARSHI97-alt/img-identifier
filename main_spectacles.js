img = "";

function preload() {
img = loadImage('spectacles.jpeg');
}
function setup() {
    canvas = createCanvas(400, 400);
    canvas.center();

   
}
function draw(){
    image(img, 0, 0, 400, 400);
    fill("#00FF00");
    text("Spectacles", 45, 75);
    noFill();
    stroke("#00FF00");
    rect(30, 60, 350, 350);

}


function addUserback5() {

    window.location = "index.html";
}
