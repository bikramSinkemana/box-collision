function Box(x, y) {
  this.x = x ||20;
  this.y = y ||20;
  this.height = 50;
  this.width = 50;
  this.velocity;
  this.color = 'blue';

  this.name = "";
  this.angle;
    this.velocityX ;
    this.velocityY ;


  this.element;

  this.create = function () {
    this.element = document.createElement('div');

    this.setPosition(this.x, this.y);

    this.element.style.width = this.width;
    this.element.style.height = this.height;
    this.element.style.position = 'absolute';
    this.movement=false;
    this.element.style.background = this.color;
  }

  this.setPosition = function (x, y) {
    this.x = x;
    this.y = y;

    this.element.style.top = this.y;
    this.element.style.left = this.x;
  }
  this.setVelocity=function(v){
    this.velocity=v;
  }

  this.move = function (angle) {
    this.angle=angle;
     this.velocityX = Math.cos(this.angle);
    this.velocityY =Math.sin(this.angle);

    this.x = this.x + (this.velocity * this.velocityX);
    this.y=this.y + (this.velocity * this.velocityY);

    this.element.style.left = this.x;
    this.element.style.top = this.y;
  }
}