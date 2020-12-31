

var engine,world;
var red,red_image;
var ship,ship_img ;
var r,ri;
function preload()
{
red_image=loadImage("water.png");
ship_img=loadImage("images.jpg");
ri_img=loadImage("pi.png");
}

function setup() {
  createCanvas(800, 800);
 

	   red=createSprite(400,400,10,10);
     red.addImage("ATER",red_image);	
     red.scale=2;
     ship=createSprite(100,500,10,10);
    ship.addImage("Air",ship_img);	
    ship.scale=0.5;

    ship=createSprite(100,400,10,10);
    ship.addImage("Air",ship_img);	
    ship.scale=0.5;
    ship=createSprite(100,300,10,10);
    ship.addImage("Air",ship_img);	
    ship.scale=0.5;
    ship=createSprite(100,200,10,10);
    ship.addImage("Air",ship_img);	
    ship.scale=0.5;
    ship=createSprite(100,100,10,10);
    ship.addImage("Air",ship_img);	
    ship.scale=0.5;

    r=createSprite(700,500,10,10);
    r.addImage("Air",ri_img);	
    r.scale=0.5;

    r=createSprite(700,400,10,10);
    r.addImage("Air",ri_img);	
    r.scale=0.5;
    r=createSprite(700,300,10,10);
    r.addImage("Air",ri_img);	
    r.scale=0.5;
    r=createSprite(700,200,10,10);
    r.addImage("Air",ri_img);	
    r.scale=0.5;
    r=createSprite(700,100,10,10);
    r.addImage("Air",ri_img);	
    r.scale=0.5;




	//TITLE:PIRATES OF THE CARREBEAN.
//GOAL:to Destroy the Pirates of "INDIAN,ATLANTIC,ARTIC".
//Story
      //Once Upon a time there was a great Pirate named *Jerry Joel*.
      //He ruled all over Pacific ocean.
      //He had over thousand lakhs of ship and Ten thousand lakhs of captians.
      //His enemys that is King of atlantic ocean Decided to attack the ships of the great Jerry joel.
      //The Captains of Jerry Joel came to knew this and informed to Pirate Jerry Joel.
      //Jerry Joel Tell his men to keep friendship with him. 
      //But the atlantic pirate wants all the powers of the Great Jerry Joel.
      //So Jerry Joel sent 50 thousand of his ships and 10 lakhs of captians to attack the navy of total twenty thousand ships and 5 lakhs of captians
      //A great war was happened between them, unfortunatly the Pirates of *indian and artic ocean* joined the navy of atlantic ocean.
      //Jerry's navy was defeated by 1 lakhs of ships and 1core of captains navy of the three power.
      // So Jerry  the Great Pirate announced a war on the three powers *atlantic,artic,indian ocean' pirates*
      //Jerry Joel took 9 thousand lakhs of ship and 9 thousand lakhs of captians and going to face a great war.
      //Jerry Joel and his men are going to a great war to atlantic,artic,indian ocean'pirates.
      //Whose total ships are 1 lakhs of ships and 1core of captains . 

//Playing Characters:Jerry Joel and his Great Navy.
//function of Characters playing characters: Jerry Joel and His Navy will fought with weapons loaded in al Ships.
//NonPlaying Characters :  The  Three Powers of "INDIAN,ATLANTIC,ARTIC"Pirates and their forces.
//function of Non playing characters: to fight aganist the Great Pirate *Jerry Joel*.
//Engaging the Game : it makes the player to engage more on game by leading a great navy forces attacking the enemy.

	
  
}


function draw() {

  background(0,0,255);
 

  drawSprites();
}




