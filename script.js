var circ = document.querySelectorAll('.circ--1,.circ--2,.circ--3');
var newq;
let h,w,nh,nw,s; 

function newPosition(){
  innerHeight=513;
  innerWidth=1340;   
  h = window.innerHeight - 50;
  w = window.innerWidth - 50;
  nh = Math.floor(Math.random() * h);
  nw = Math.floor(Math.random() * w);
  s = Math.floor(Math.random()*1000) + 4000
  return [nh,nw,s];       
}

circ.forEach(function circ(myclass) {
  var newq = newPosition();
  $(myclass).animate({ 
    top: newq[0], left: newq[1] 
    },
    newq[2],   function(){
    circ(myclass);        
  });
});