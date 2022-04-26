var canvas = document.getElementById('canvas')
 var artArea = canvas.getContext('2d')
 var changecolor = document.getElementById("color")
 var circleflag
 var lineflag
 var freedrawflag 
 var eraseflag
var rectflag
var x1
var y1
var x2
var y2
var prev 
var x11, y11


 function color(){
     
    
    
     
     
     artArea.fillStyle=changecolor.value
     artArea.strokeStyle=changecolor.value
     
     
     console.log(artArea.fillStyle)
     //artArea.strokeStyle
 }
 
 ///// rectangle////
 //function rectangle(){
//artArea.stroke();
 //artArea.fillStyle = 'red';
 //artArea.fillRect(0,0, 150, 75);
 //}

 function rectangle(){
     rectflag=true;
     circleflag=false
 lineflag=false
  freedrawflag =false
  
  
  eraseflag=false

    canvas.addEventListener('mousedown', (e) => {
        if(rectflag==true){
            artArea.beginPath();
         x1=e.offsetX;
        y1=e.offsetY;
        }
    });
    canvas.addEventListener('mouseup', (e) =>{
        if(rectflag==true){
         x2=e.offsetX;
         y2=e.offsetY;
        artArea.fillRect(x1,y1,x2-x1,y2-y1);
         artArea.stroke();
    // artArea.fillStyle = 'red';
        }
    
     });
    }
 //////circle/////
 // function circle(){
 //artArea.beginPath();
 //artArea.arc(200,100, 40, 0, 2 * Math.PI );
 //artArea.stroke();
 // }

  function circle(){
      console.log("circle");
      circleflag=true
      lineflag=false
      freedrawflag=false
      rectflag=false
      
    canvas.addEventListener('mousedown', (e) => {
        if (circleflag==true){
    artArea.beginPath();
    //artArea.arc(e.offsetX, e.offsetY, e.offsetX/4, 0, 2 * Math.PI );
        x11=e.offsetX
        y11=e.offsetY
        }
    
     });
     canvas.addEventListener('mouseup', (e) => {
        if (circleflag==true){
            artArea.arc(x11,y11,Math.sqrt(Math.pow(e.offsetX-x11,2)+Math.pow(e.offsetY-y11,2)), 0, 2 * Math.PI );
        artArea.stroke(); }
    });
   }

 
//////line/////
//function line(){
  //artArea.strokeStyle='blue'
 //artArea.moveTo(10, 10)
// artArea.lineTo(350, 220)
//artArea.lineWidth=6;
//artArea.stroke() }

 //////draw a line ////
 function line(){
     console.log("line");
    circleflag=false
    lineflag=true
    freedrawflag=false
    rectflag=false
    
 canvas.addEventListener('mousedown', (e) => {
    if (lineflag==true){
     //artArea
      artArea.beginPath();
      //artArea.strokeStyle=changecolor;
     artArea.moveTo(e.offsetX, e.offsetY);
    }
 });
 
 canvas.addEventListener('mouseup', (e) => {
    if (lineflag==true){
     artArea.lineTo(e.offsetX, e.offsetY);
     artArea.stroke();}
 });

}
 
     //// free style///
     function free(){
        circleflag=false
        lineflag=false
        rectflag=false
        freedrawflag=true
        
     var drawFlag = false;
      canvas.addEventListener('mousedown', function (e) {
        if (freedrawflag==true){
            artArea.beginPath();
          artArea.moveTo(e.offsetX, e.offsetY);
         drawFlag = true
        }
      });
      canvas.addEventListener('mouseup', function (e) {
          drawFlag = false;
         //freedrawflag=false;
     
      });
     canvas.addEventListener('mousemove', function (e) {
         if (drawFlag) {
             artArea.lineTo(e.offsetX, e.offsetY);
             artArea.stroke();
         }
      });
    }


//canvas.beginPath();

function eraser(){
    circleflag=false
    lineflag=false
    freedrawflag=false
    rectflag=false
    eraseflag=true
    artArea.strokeStyle="white"
    // prev= changecolor.value;
    //changecolor.value="white"
    
 var eraseFlag = false;
  canvas.addEventListener('mousedown', function (e) {
    if (eraseflag==true){
        artArea.beginPath();
      artArea.moveTo(e.offsetX, e.offsetY);
      eraseFlag = true
    }
  });
  canvas.addEventListener('mouseup', function (e) {
    if (eraseflag==true){
      eraseFlag = false;
      //changecolor.value=prev;
    }
 
  });
 canvas.addEventListener('mousemove', function (e) {
    if (eraseflag==true){
     if (eraseFlag) {
         artArea.lineTo(e.offsetX, e.offsetY);
         artArea.stroke();
     }
    }
  });
}
