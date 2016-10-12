var pizza0;
var pizzaImg;

var multiPizzas = [];

function setup() {
  createCanvas(500, 500);
   pizzaImg = loadImage("assets/pizza-slice-pennant-3x5-9.jpg");
  pizza0 = new pizzas (random(width), random(height), 100, pizzaImg);

  for (var i = 0; i < 10; i++) {
    var newPizza = new pizzas(random(width), random(height), 100, pizzaImg);
    multiPizzas.push(newPizza);
 }
}

function draw() {
  background(255);

  for (var i = 0; i < multiPizzas.length; i++) {
  var curPizzaState = multiPizzas[i].check(mouseX, mouseY);
    multiPizzas[i].display(curPizzaState);
    multiPizzas[i].update(curPizzaState);
  }

}

function pizzas(tempX, tempY, tempDiameter, tempImg) {

  this.x = tempX;
  this.y = tempY;
  this.diameter = tempDiameter;
  this.img = tempImg;

  this.display = function(showHide) {
    if(showHide == false){
      fill(100);
      imageMode(CENTER);
      image(this.img, this.x, this.y, this.diameter, this.diameter);
    }
  }

  this.check = function(userX, userY) {

    var mouseDist = int(dist(userX, userY, this.x, this.y));

    if (mouseDist < this.diameter / 2) {
      console.log("Slice");
      return true;
    } else {
      return false;
    }
    
  }


  this.update = function(runUpdate) {
   if (runUpdate == true) {
      this.x = int(random(width));
      this.y = int(random(height));
    }
  }
  
  
}

