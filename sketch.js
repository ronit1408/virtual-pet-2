var dog,happyDog,database,foodS,foodStock,dog1;

function preload(){
	
  dog = loadImage("images/Dog.png");
  happyDog = loadImage("images/happydog.png");
}

function setup() {
	createCanvas(500,500);
  
  dog1 = createSprite(350,350,20,20);
  dog1.addImage("dog1",dog);

  foodStock = database.ref('food');
  foodStock.on("value",readStock);

}


function draw() {  
  background(46,139,87);


  if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage("hDog",happyDog);
  }

  drawSprites();
  textSize();
  text("foodStock");
}



