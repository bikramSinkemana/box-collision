function Container() {
  this.height = 900;
  this.width = 900;
  this.color = 'red';

  this.element;

  this.create = function () {
    this.element = document.createElement('div');

    this.element.style.width = this.width;
    this.element.style.height = this.height;
    this.element.style.position = 'relative';
    this.element.style.background = this.color;
  }

  this.append = function (element) {
    this.element.appendChild(element);
  }
}

