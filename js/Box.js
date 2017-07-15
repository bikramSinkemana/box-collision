function Box(x, y) {
  this.x = x || 10;
  this.y = y || 10;
  this.height = 50;
  this.width = 50;
  this.velocity = 1;
  this.color = 'blue';
  this.directionX = 1;
  this.directionY = 1;
  this.name = "";

  this.element;

  this.create = function () {
    this.element = document.createElement('div');

    this.setPosition(this.x, this.y);

    this.element.style.width = this.width;
    this.element.style.height = this.height;
    this.element.style.position = 'absolute';
    this.element.style.background = this.color;
  }

  this.setPosition = function (x, y) {
    this.x = x;
    this.y = y;

    this.element.style.top = this.y;
    this.element.style.left = this.x;
  }

  this.move = function () {
    this.x = this.x + (this.velocity * this.directionX);
    this.y=this.y + (this.velocity * this.directionY);

    this.element.style.left = this.x;
    this.element.style.top = this.y;
  }
}