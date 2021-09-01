
var pr1
var pr2 
var l1,l2
var top,left,bottom,right
var PLAY = 1
var END = 0
var gameState = PLAY 
var b1,b2
var re
var not
var bg2
var sps

function preload(){
  
bg_img=loadImage("2021-08-29 (2).png")
  pr1_img=loadAnimation("y1.png","y2.png","y3.png","y4.png")
  pr1_stand=loadImage("y1.png")
  pr2_stand=loadImage("output-onlinepngtools (2).png")
  pr2_img=loadAnimation("output-onlinepngtools (2).png","output-onlinepngtools (3).png","output-onlinepngtools (4).png","output-onlinepngtools (5).png","output-onlinepngtools (6).png")
  
  sps_img=loadImage("sps.png")
    line_img=loadImage("l1.png")
  line2_img=loadImage("l2.png")
  bullet_left=loadImage("output-onlinepngtools (13).png")
  bullet_right=loadImage("output-onlinepngtools (14).png")
  re_img=loadImage("re.png")
  notice_img=loadImage("INSTRU~1.PNG")
  bg2_img=loadImage("vssss.png")
}

function setup() {
 createCanvas(1535,650)
  //////////////////////////////////////////////bg2
  
  bg2=createSprite(767,325,10,10)
  bg2.addImage("yeep..",bg2_img)
  bg2.scale=1.2
  
////////////////////////////////////////////////players
  pr1=createSprite(75,325,20,20)
  pr1.addAnimation("you",pr1_stand)
  
  pr2=createSprite(1500,325,20,20)
  pr2.addImage("hehe",pr2_stand)
   pr2.scale=0.4

///////////////////////////////////////////////starting lines

l1=createSprite(200,325,20,20)
l1.addImage("jo",line_img)
l1.scale=1
  l1.velocityY=0
  
l2=createSprite(1350,325,20,20)
l2.addImage("jo",line2_img)
l2.scale=1
  l2.velocityY=0
  
///////////////////////////////////////////////top,left,right,bottom
top=createSprite(775,5,1550,20)

left=createSprite(5,325,20,650)
bottom=createSprite(775,645,1550,20)
right=createSprite(1530,325,20,650)
/////////////////////////////////////////////////// re,notice
re=createSprite(1510,325,30,30)
re.addImage("hm..",re_img)

not=createSprite(767,325,500,500)
  not.addImage("äww..",notice_img)
/////////////////////////////////////////////////////sps

sps=createSprite(767,600,10,10)  
  sps.addImage("hn..",sps_img)
  sps.scale=1
  
}


function draw() {
  background(bg_img,0,0,displayWidth,displayHeight)
  
  //////////////////////////////PLAY
  /////////////////////////////PLAY
  ////////////////////////////PLAY


  if(gameState===PLAY){

    
    
    
    
    
    if(keyDown("y")){
      
      pr1=createSprite(75,325,20,20)
  pr1.addAnimation("you",pr1_img)
    
    }
    
    if(keyDown("space")){
      
  pr1.addAnimation("you",pr1_img)
  pr2.addAnimation("you",pr2_img)
   pr2.scale=0.4
        
      
  l1.velocityY=2
  l2.velocityY=2
      
      not.visible=false
      
      bg2.visible=false 
    
      sps.visible=false
    }
    
//////////////////////////////////////true/false
re.visible=false

   //////////////////////////////key code for pr1
  
   if(keyDown("w")){
    pr1.y -= 10;
      }
  
      if(keyDown("a")){
        pr1.x -= 10;
          }
  
          if(keyDown("s")){
            pr1.y += 10;
              }
  
              if(keyDown("d")){
                pr1.x += 10;
                  }
  
  
   //////////////////////////////key down for pr2
   if(keyDown("up")){
    pr2.y -= 10;
      }
  
      if(keyDown("left")){
        pr2.x -= 10;
          }
  
          if(keyDown("down")){
            pr2.y += 10;
              }
  
              if(keyDown("right")){
                pr2.x += 10;
                  }
      

 ///////////////////////////////////////////////////goli
 if(keyDown("z")){
    
  b1=createSprite(pr1.x,pr1.y,20,20)
  b1.velocityX=20
  b1.addImage("k",bullet_right)
  b1.scale=0.2
}

if(keyDown("9")){
  
  b2=createSprite(pr2.x,pr2.y,20,20)
  b2.velocityX-=20
  b2.addImage("k",bullet_left)
  b2.scale=0.2
}

///////////////////////////////////////////////collide
  
pr1.collide(l1)
pr2.collide(l2)
    
///////////////////////////////////////////////////////debug 
pr1.debug=true
pr2.debug=true
    //////////////////////////////////////way to end
if(pr1.isTouching(pr2)){   
gameState=END

  

}

 }
////////////////////////////////////////END
///////////////////////////////////////END
//////////////////////////////////////END

                if (gameState===END){
                  re.visble=true
                  pr1.visible=false
                  pr2.visible=false
                  
              fill("cyan")
     textSize(99)
       text("thanks for playing",350,325)
                  
                  
  pr1.addAnimation("you",pr1_stand)
                  
                  
                  
                  }
          
          
   drawSprites();
  
  
        }


