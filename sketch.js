var wall1,wall2,ball1,ball2;

function setup(){
    createCanvas(600,400);

    wall1=createSprite(100,200,20,80);

    wall2=createSprite(500,200,20,80);

    ball1=createSprite(200,200,40,40);
    
    ball1.shapeColor="red";
    ball1.velocityX=4;

    ball2=createSprite(400,200,40,40);
   
}

function draw(){
    background("white");

    bounce(ball1,ball2);
    
    bounceOff(ball2,wall2);
    bounceOff(ball1,wall1);
    bounceOff(ball2,wall1);


    console.log(ball1.velocityX);
    console.log(ball2.velocityX);
    drawSprites();
}