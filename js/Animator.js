function Animator(boxes, container) {
  var intervalId;
  var that = this;
  this.boxes = boxes;
  this.container = container;
  this.mouseX;
  this.mouseY;
  this.velocityX;
  this.velocityY;
  this.clicked=false;

  this.animate = function () {
    intervalId = setInterval(function () {
      that.boxes.forEach(function (box) {
        that.move(box);
        that.checkWallCollision(box);
        that.checkBoxCollision();
      });
    }, 1);
  }

  this.move = function (box) {
    box.move();
  }

  this.checkWallCollision = function (box) {
    if ((box.x + box.width) >= container.width || (box.x <= 0)/*||(box.y + box.height) >= container.height || (box.y<=0)*/) {
     
        box.directionX*=-1;

        if( (box.y + box.height) >= container.height || (box.y <= 0)){
          box.directionY*=-1;
          // while(((box.x + box.width) >= container.width || (box.x <= 0))||((box.y + box.height) >= container.height || (box.y <= 0))){
          //   box.move();
          // }


        }
       
      }
      else if((box.y + box.height) >= container.height || (box.y <= 0)){
        box.directionY*=-1;
        if ((box.x + box.width) >= container.width || (box.x <= 0)) {
          box.directionX*=-1;
          // while(((box.y + box.height) >= container.height || (box.y <= 0))||((box.x + box.width) >= container.width || (box.x <= 0))){
          //   box.move();
          // }
        }
      }
    }
    this.checkBoxCollision =function(){
      
        for (var i = 0; i < that.boxes.length; i++) {
          for (var j = i; j < that.boxes.length; j++) {
            
         
        if (boxes[i] !=boxes[j]) {
                        
                      /*  if (rect1.x < rect2.x + rect2.width &&
               rect1.x + rect1.width > rect2.x &&
               rect1.y < rect2.y + rect2.height &&
               rect1.height + rect1.y > rect2.y) {
                // collision detected!
            }*/
            if (boxes[i].x<boxes[j].x+boxes[j].width &&
              boxes[i].x+boxes[i].width>boxes[j].x &&
              boxes[i].y< boxes[j].y+boxes[j].height &&
              boxes[i].height + boxes[i].y > boxes[j].y) {
              debugger;
              var x=boxes[i].directionX;
              boxes[i].directionX=boxes[j].directionX;
              boxes[j].directionX=x;

              var y=boxes[i].directionY;
              boxes[i].directionY=boxes[j].directionY;
              boxes[j].directionY=y;
              while(boxes[i].x<boxes[j].x+boxes[j].width &&
              boxes[i].x+boxes[i].width>boxes[j].x &&
              boxes[i].y< boxes[j].y+boxes[j].height &&
              boxes[i].height + boxes[i].y > boxes[j].y
              ){
               
               boxes[i].move();
             boxes[j].move();
             debugger;

              }
              

            }
       

     
      }
         
 }
     
 }
  
}
}