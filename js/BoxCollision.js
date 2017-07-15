// Main application Class

function BoxCollision(elementId) {

  var element = document.getElementById(elementId);
  

  this.init = function () {
    var container = new Container();
    var boxes = [];
    container.create();

   
    for (var i = 0; i < 5; i++) {
     var box= new Box(randomNumber(2,600),randomNumber(50,800));
     box.name = "box"+i;
     console.log(randomNumber(2, 600));
    

    box.create();

    boxes.push(box);
    container.append(box.element);
       
    }
    var box = new Box();
    box.name = "box";
    box.color = "black";
    box.create();
    boxes.push(box);

    container.append(box.element);
  

    element.appendChild(container.element);

    var animator = new Animator(boxes, container);
    animator.animate();
  }
}

var boxCollision = new BoxCollision('box-collision');

boxCollision.init();