var canvas;
var music;
var Pinkbar;
var Bluebar;
var Greenbar;
var Yellowbar;
var box;
var topEdge, bottomEdge, rightEdge, leftEdge
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    Pinkbar=createSprite(100,570,180,10);
    Pinkbar.shapeColor="pink";

    Greenbar=createSprite(290,570,180,10);
    Greenbar.shapeColor="lightgreen";

    Bluebar=createSprite(480,570,180,10);
    Bluebar.shapeColor="lightblue";

    Yellowbar=createSprite(670,570,180,10);
    Yellowbar.shapeColor="lightyellow"
    //create box sprite and give velocity
box=createSprite(750,60,30,30);
box.shapeColor="red";
box.velocityY=Math.round(random(2,4));
box.velocityX=Math.round(random(2,4));
}

function draw() {
    background(0);
    //create edgeSprite
   


    //add condition to check if box touching surface and make it box
if(box.isTouching(Pinkbar)){
box.shapeColor="pink";
box.bounceOff(Pinkbar);
}else if (box.isTouching(Yellowbar)){
    box.shapeColor="lightyellow";
    box.bounceOff(Yellowbar);
}else if (box.isTouching(Greenbar)){
    box.shapeColor="lightgreen";
    box.bounceOff(Greenbar);
}else if (box.isTouching(Bluebar)){
    box.shapeColor="lightblue";
    box.bounceOff(Bluebar);
}

topEdge = createSprite(100,10,1500,10);
topEdge.shapeColor ="black";
bottomEdge =createSprite(100,590,1500,10);
bottomEdge.shapeColor ="black";
leftEdge = createSprite(10,200,10,1500);
leftEdge.shapeColor ="black";
rightEdge =createSprite(790,10,10,1500);
rightEdge.shapeColor ="black";

if(box.isTouching(topEdge)){
    box.bounceOff(topEdge);
}
else if(box.isTouching(bottomEdge)){
    box.bounceOff(bottomEdge);
}
else if(box.isTouching(rightEdge)){
    box.bounceOff(rightEdge);
}
else if(box.isTouching(leftEdge)){
    box.bounceOff(leftEdge);
}




    drawSprites();
}



