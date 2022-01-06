let points;
let worker;
let myCanvas;
let maxDist=100;
let index=0;
const strokeW=1;
function setup() {
    var w=windowWidth;
    var h=windowHeight;
    myCanvas=createCanvas(w, h);

    points = new Entities(350);
    points.calcLines();
    frameRate(20);
}

 async function draw() {
    background(0, 57, 77);
    points.show();
    points.update();
    index++;
    if(index%20==0){
        points.calcLines();
    }
}



