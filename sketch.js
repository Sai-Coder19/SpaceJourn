const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;

var engine, world;
var ground,bg;
var Startbutton,StartbuttonIMG,message,nextbutton,nextbuttonIMG;
var spaceBg,spaceBgIMG;
var gamestate="start";
var mercury,mercuryIMG,venus,venusIMG,earth,earthIMG,mars,marsIMG,jupitar,jupitarIMG,saturn,saturnIMG,uranus,uranusIMG,neptune,neptuneIMG;
var rocket,rocketIMG;
var mercbg,mercbgIMG,venbg,venbgIMG,earthbg,earthbgIMG,marsbg,marsbgIMG,jupbg,jupbgIMG,satbg,satbgIMG,uranbg,uranbgIMG,neptbg,neptbgIMG;
var wiz,wizIMG;
var mercmon,mercmonIMG;

function preload(){
    bg=loadImage("images/background.jpg")
    StartbuttonIMG=loadImage("images/StartButton.png")
    spaceBgIMG=loadImage("images/Space.png");

    mercuryIMG=loadImage("images/Mercury.png");
    venusIMG=loadImage("images/Venus.png");
    earthIMG=loadImage("images/Earth.png");
    marsIMG=loadImage("images/Mars.png");
    jupitarIMG=loadImage("images/Jupitar.png");
    saturnIMG=loadImage("images/Saturn.png");
    uranusIMG=loadImage("images/Uranus.png");
    neptuneIMG=loadImage("images/Neptune.png");

    rocketIMG=loadImage("images/Rocket.png");
    nextbuttonIMG=loadImage("images/nextbutton.png");
    wizIMG=loadImage("images/SpaceWiz.png");
    mercbgIMG=loadImage("images/mercbg.jpg");
    venbgIMG=loadImage("images/venusbg.jpg");
    earthbgIMG=loadImage("images/earthbg.jpg")
    marsbgIMG=loadImage("images/marsbg.jpg");
    jupbgIMG=loadImage("images/jupitarbg.jpg");
    satbgIMG=loadImage("images/saturnbg.png");
    uranbgIMG=loadImage("images/uranusbg.jpg");
    neptbgIMG=loadImage("images/neptbg.jpg");

    mercmonIMG=loadImage("images/mercmon.png");
}

function setup(){
    var canvas = createCanvas(2000,1000);
    engine = Engine.create();
    world = engine.world;

    ground=new Ground(1500,height,3000,20);
    Startbutton=createSprite(width/2,height/2,100,50);
    Startbutton.addImage(StartbuttonIMG);
    spaceBg=createSprite(0,0,width,height);
    spaceBg.addImage(spaceBgIMG);
    spaceBg.visible=false;
    nextbutton=createSprite(width-200,100)
    nextbutton.addImage(nextbuttonIMG);
    nextbutton.visible=false;
    nextbutton.scale=0.5
    
    mercbg=createSprite(0,0,width,height);
    mercbg.addImage(mercbgIMG);
    mercbg.visible=false;
    mercbg.scale=2.0

    mercmon=createSprite(1000,500);
    mercmon.addImage(mercmonIMG);
    mercmon.visible=false;

    mercury=createSprite(120,255)
    mercury.addImage(mercuryIMG)
    mercury.visible=false
    mercury.scale=0.4;

    venbg=createSprite(0,0,width,height);
    venbg.addImage(venbgIMG);
    venbg.visible=false;
    venbg.scale=2.0
    
    venus=createSprite(431,255)
    venus.addImage(venusIMG)
    venus.visible=false
    venus.scale=0.25;



    earthbg=createSprite(0,0,width,height);
    earthbg.addImage(earthbgIMG);
    earthbg.visible=false;
    earthbg.scale=2.0

    earth=createSprite(742,255)
    earth.addImage(earthIMG)
    earth.visible=false
    earth.scale=0.6;

    marsbg=createSprite(0,0,width,height);
    marsbg.addImage(marsbgIMG);
    marsbg.visible=false;
    marsbg.scale=2.0

    mars=createSprite(631,555)
    mars.addImage(marsIMG)
    mars.visible=false
    mars.scale=0.25;

    jupbg=createSprite(0,0,width,height);
    jupbg.addImage(jupbgIMG);
    jupbg.visible=false;
    jupbg.scale=2.0

    jupitar=createSprite(380,800)
    jupitar.addImage(jupitarIMG)
    jupitar.visible=false
    jupitar.scale=0.35;

    satbg=createSprite(0,0,width,height);
    satbg.addImage(satbgIMG);
    satbg.visible=false;
    satbg.scale=2.0

    saturn=createSprite(820,800)
    saturn.addImage(saturnIMG)
    saturn.visible=false
    saturn.scale=0.90;

    uranbg=createSprite(0,0,width,height);
    uranbg.addImage(uranbgIMG);
    uranbg.visible=false;
    uranbg.scale=2.0

    uranus=createSprite(1260,800)
    uranus.addImage(uranusIMG)
    uranus.visible=false
    uranus.scale=0.80;

    neptbg=createSprite(0,0,width,height);
    neptbg.addImage(neptbgIMG);
    neptbg.visible=false;
    neptbg.scale=2.0

    neptune=createSprite(1700,800)
    neptune.addImage(neptuneIMG)
    neptune.visible=false
    neptune.scale=0.25;

    rocket=createSprite(120,100)
    rocket.addImage(rocketIMG)
    rocket.visible=false
    rocket.scale=0.2;
}

function draw(){
    background(bg);
    text(mouseX+","+mouseY,mouseX,mouseY);
    Engine.update(engine);
    if(gamestate==="start"){
        textSize(30);
        fill("White")
        text("Earth has been destroyed and you are the last one left.",10,240);
        text("However all hope is not lost.Travel to each planet and",10,280)
        text("complete the task that the Space Wizard gives you.",10,320);
        text("Succeed to complete the tasks and Earth will be restored.",10,360);
        text("Good luck your our last hope!",10,400);
        textSize(80);
        fill("Blue")
        text("JOURNEY THROUGH SPACE",400,100);
        
        if(mousePressedOver(Startbutton)){
            spaceBg.visible=true;
            spaceBg.scale=2.5;
            gamestate="play";
        }
    }
   if(gamestate==="play"){
       mercury.visible=true;
       venus.visible=true;
       earth.visible=true;
       mars.visible=true;
       jupitar.visible=true;
       saturn.visible=true;
       uranus.visible=true;
       neptune.visible=true;

       rocket.visible=true;
       nextbutton.visible=true;
       
       if(mousePressedOver(nextbutton)){
        spaceBg.visible=true;
        spaceBg.scale=2.5;
        gamestate="merc";
    }
    }
    if(gamestate==="merc"){
        mercbg.visible=true
        mercmon.visible=true
        mercury.visible=false;
        venus.visible=false;
        earth.visible=false;
        mars.visible=false;
        jupitar.visible=false;
        saturn.visible=false;
        uranus.visible=false;
        neptune.visible=false;
 
        rocket.visible=false;
        nextbutton.visible=false;
        nextbutton1.visible=true
        
        if(mousePressedOver(nextbutton)){
            mercbg.visible=true;
            mercbg.scale=2.5;
            gamestate="venus";
        }
    }
    
    if(gamestate==="venus"){
        mercbg.visible=false
        mercmon.visible=false
        venbg.visible=true
        mercury.visible=false;
        venus.visible=false;
        earth.visible=false;
        mars.visible=false;
        jupitar.visible=false;
        saturn.visible=false;
        uranus.visible=false;
        neptune.visible=false;
 
        rocket.visible=false;
        nextbutton.visible=false;
        nextbutton1.visible=false;
        nextbutton2.visible=true
        
        nextbutton1=createSprite(width-200,100)
    nextbutton1.addImage(nextbuttonIMG);
    nextbutton1.visible=false;
    nextbutton1.scale=0.5
        if(mousePressedOver(nextbutton1)){
            venbg.visible=true;
            venbg.scale=2.5;
            gamestate="earth";
        }
    }

    if(gamestate==="earth"){
        mercbg.visible=false
        mercmon.visible=false
        venbg.visible=false
        earthbg.visible=true
        mercury.visible=false;
        venus.visible=false;
        earth.visible=false;
        mars.visible=false;
        jupitar.visible=false;
        saturn.visible=false;
        uranus.visible=false;
        neptune.visible=false;
 
        rocket.visible=false;
        nextbutton.visible=false;
        nextbutton1.visible=false;
        nextbutton2.visible=false
        nextbutton3.visible=true
        
        nextbutton2=createSprite(width-200,100)
    nextbutton2.addImage(nextbuttonIMG);
    nextbutton2.visible=false;
    nextbutton2.scale=0.5
    if(mousePressedOver(nextbutton2)){
            earthbg.visible=true;
            earthbg.scale=2.5;
            gamestate="mars";
        }
    }
    if(gamestate==="mars"){
        mercbg.visible=false
        mercmon.visible=false
        venbg.visible=false
        earthbg.visible=false
        marsbg.visible=true
        mercury.visible=false;
        venus.visible=false;
        earth.visible=false;
        mars.visible=false;
        jupitar.visible=false;
        saturn.visible=false;
        uranus.visible=false;
        neptune.visible=false;
 
        rocket.visible=false;
        nextbutton.visible=false;
        
        nextbutton3=createSprite(width-200,100)
    nextbutton3.addImage(nextbuttonIMG);
    nextbutton3.visible=false;
    nextbutton3.scale=0.5
        if(mousePressedOver(nextbutton3)){
            marsbg.visible=true;
            marsbg.scale=2.5;
            gamestate="jupitar";
        }
    }
    if(gamestate==="jupitar"){
        mercbg.visible=false
        mercmon.visible=false
        venbg.visible=false
        earthbg.visible=false
        marsbg.visible=false
        jupbg.visible=true
        mercury.visible=false;
        venus.visible=false;
        earth.visible=false;
        mars.visible=false;
        jupitar.visible=false;
        saturn.visible=false;
        uranus.visible=false;
        neptune.visible=false;
 
        rocket.visible=false;
        nextbutton.visible=false;
        nextbutton4=createSprite(width-200,100)
    nextbutton4.addImage(nextbuttonIMG);
    nextbutton4.visible=false;
    nextbutton4.scale=0.5
        if(mousePressedOver(nextbutton4)){
            jupbg.visible=true;
            jupbg.scale=2.5;
            gamestate="saturn";
        }
    }
    if(gamestate==="saturn"){
        mercbg.visible=false
        mercmon.visible=false
        venbg.visible=false
        earthbg.visible=false
        marsbg.visible=false
        jupbg.visible=false
        satbg.visible=true;
        mercury.visible=false;
        venus.visible=false;
        earth.visible=false;
        mars.visible=false;
        jupitar.visible=false;
        saturn.visible=false;
        uranus.visible=false;
        neptune.visible=false;
 
        rocket.visible=false;
        nextbutton.visible=false;
        nextbutton5=createSprite(width-200,100)
    nextbutton5.addImage(nextbuttonIMG);
    nextbutton5.visible=false;
    nextbutton5.scale=0.5
        if(mousePressedOver(nextbutton5)){
            satbg.visible=true;
            satbg.scale=2.5;
            gamestate="uran";
        }
    }
    if(gamestate==="uran"){
        mercbg.visible=false
        mercmon.visible=false
        venbg.visible=false
        earthbg.visible=false
        marsbg.visible=false
        jupbg.visible=false
        satbg.visible=false
        uranbg.visible=true
        mercury.visible=false;
        venus.visible=false;
        earth.visible=false;
        mars.visible=false;
        jupitar.visible=false;
        saturn.visible=false;
        uranus.visible=false;
        neptune.visible=false;
 
        rocket.visible=false;
        nextbutton.visible=false;
        nextbutton6=createSprite(width-200,100)
    nextbutton6.addImage(nextbuttonIMG);
    nextbutton6.visible=false;
    nextbutton6.scale=0.5
        if(mousePressedOver(nextbutton6)){
            uranbg.visible=true;
            uranbg.scale=2.5;
            gamestate="nept";
        }
    }
    if(gamestate==="nept"){
        mercbg.visible=false
        mercmon.visible=
        venbg.visible=false
        earthbg.visible=false
        marsbg.visible=false
        jupbg.visible=false
        satbg.visible=false
        uranbg.visible=false
        neptbg.visible=true
        mercury.visible=false;
        venus.visible=false;
        earth.visible=false;
        mars.visible=false;
        jupitar.visible=false;
        saturn.visible=false;
        uranus.visible=false;
        neptune.visible=false;
 
        rocket.visible=false;
        nextbutton.visible=false;
        nextbutton7=createSprite(width-200,100)
    nextbutton7.addImage(nextbuttonIMG);
    nextbutton7.visible=false;
    nextbutton7.scale=0.5
        //if(mousePressedOver(nextbutton)){
            //neptBg.visible=true;
            //neptBg.scale=2.5;
           // gamestate="merc";
     //   }
    }
    drawSprites();
}

//function mouseDragged(){
    //Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
//}

//function keyPressed(){}