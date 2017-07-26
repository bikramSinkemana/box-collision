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
  var speed=3;

  this.animate = function () {
   
    intervalId = setInterval(function () {
       this.element=that.container.element;


          that.boxes.forEach(function (box) {
     if (box.color=='black'&&that.clicked==false) {
        
        this.element.addEventListener('click',function(){
       
         
             that.mouseX=event.clientX;
             that.mouseY=event.clientY;
             that.centerX=(box.x+box.width)/2;
             that.centerY=(box.y+box.height)/2;
             that.angle=Math.atan2(that.mouseY-that.centerY,that.mouseX-that.centerX);
             box.angle=that.angle;
             box.movement=true;
             that.clicked=true;
             box.velocty=1;
                      },true);
       
      }
      if (box.movement==true) {
       
        that.move(box,box.angle);
       that.checkWallCollision(box);
       


      }
  


        
             // that.checkBoxCollision();
             // that.move(box);
        // that.checkWallCollision(box);
        // that.checkBoxCollision();
      });
          that.checkBoxCollision();
    }, 1);
  }

  this.move = function (box,angle) {
     box.setVelocity(speed);
    box.move(angle);
  }

  this.checkWallCollision = function (box) {

    if ((box.x + box.width) >= container.width || (box.x <= 0) ){
     debugger;
        // box.velocityX*=-1;

        // if( (box.y + box.height) >= container.height || (box.y <= 0)){
        //   debugger;
        //   box.velocityY*=-1;
          // while(((box.x + box.width) >= container.width || (box.x <= 0))||((box.y + box.height) >= container.height || (box.y <= 0))){
          //   box.move();
          // }
box.angle=(Math.PI)-box.angle;

        }
       
      else if((box.y + box.height) >= container.height || (box.y <= 0)){
        debugger;
       
box.angle=(2*Math.PI)-box.angle;
        // box.velocityY*=-1;
        // if ((box.x + box.width) >= container.width || (box.x <= 0)) {
        //   debugger;
        //   box.velocityX*=-1;
          // while(((box.y + box.height) >= container.height || (box.y <= 0))||((box.x + box.width) >= container.width || (box.x <= 0))){
          //   box.move();
          // }
        }
      
    }
    this.checkBoxCollision =function(){
      
        for (var i = 0; i < that.boxes.length; i++) {
          for (var j = i; j < that.boxes.length; j++) {
            
         
            if (boxes[i] !=boxes[j]) { 
                            
                         
                if (boxes[i].x<boxes[j].x+boxes[j].width &&
                  boxes[i].x+boxes[i].width>boxes[j].x &&
                  boxes[i].y< boxes[j].y+boxes[j].height &&
                  boxes[i].height + boxes[i].y > boxes[j].y) {
                  debugger;
                  // var x=boxes[i].velocityX;
                  // boxes[i].velocityX=boxes[j].velocityX;
                  // boxes[j].velocityX=x;

                  // var y=boxes[i].velocityY;
                  // boxes[i].velocityY=boxes[j].velocityY;
                  // boxes[j].velocityY=y;

                      if(boxes[i].movement==false) {
                        boxes[i].movement=true;
                        debugger;
                      }
                      else if (boxes[j].movement==false){
                        boxes[j].movement=true;
                        debugger;
                      }
                      if(boxes[i].velocity==0){
                        boxes[i].angle=boxes[j].angle;
                        boxes[j].angle=Math.PI+boxes[j].angle;
                        debugger;
                      }
                      else if(boxes[j].velocity==0){
                        boxes[j].angle=boxes[i].angle;
                        boxes[i].angle=Math.PI+boxes[i].angle;
                        debugger;
                      }
                      else {
                        var temp=boxes[i].angle;
                        boxes[i].angle=boxes[j].angle;
                        boxes[j].angle=temp;
                        debugger;
                      }




                  
                 //  while(boxes[i].x<boxes[j].x+boxes[j].width &&
                 //  boxes[i].x+boxes[i].width>boxes[j].x &&
                 //  boxes[i].y< boxes[j].y+boxes[j].height &&
                 //  boxes[i].height + boxes[i].y > boxes[j].y
                 //  ){
                   
                 //   boxes[i].move();
                 // boxes[j].move();
                 // debugger;

                 //  }
                  

                }
           

         
             }
             
           }
     
         }
  
   }
}