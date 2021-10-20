img = "";

function preload() {
img = loadImage('pepsi bottle.jpeg');
}
function setup() {
    canvas = createCanvas(400, 400);
    canvas.center();

   
}
function draw(){
    image(img, 0, 0, 400, 400);
    fill("#00FF00");
    text("Soft Drink Bottle", 45, 75);
    noFill();
    stroke("#00FF00");
    rect(30, 60, 400, 400);

}


function addUserback3() {

    window.location = "index.html";
}
