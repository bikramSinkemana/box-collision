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
    box.color = "green";
    box.create();
    boxes.push(box);

    var box2 = new Box();
    box.name = "boxdsf";
    box2.color="purple";
    box2.create();
    box2.setPosition(600, 300);
    boxes.push(box2);

     var box3 = new Box();
     box.name = "boxdfadsf";
     box3.color="grey";
    box3.create();
    box3.setPosition(600, 500);
    boxes.push(box3);

    container.append(box.element);
    container.append(box2.element);
    container.append(box3.element);

    element.appendChild(container.element);

    var animator = new Animator(boxes, container);
    animator.animate();
  }
}

var boxCollision = new BoxCollision('box-collision');

boxCollision.init();