/**
 * Created by Administrator on 2014/8/13.
 */

//var w = screen.width;
//var h = screen.height;
var w = window.innerWidth;
var h = window.innerHeight;
var canvas = document.getElementById("mycanvas");
canvas.width = w ;
canvas.height = h;
var context = canvas.getContext("2d");

document.getElementById("normal").style.display = "none";

var mid = {
    x:canvas.width/2,
    y:canvas.height/2
};
drawBlackGround();
clipArc(40);
drawBackground();


function clipArc(radius){
    context.save();
    context.beginPath();
    context.arc(mid.x,mid.y,radius,0,Math.PI*2,true);
    context.stroke();
    context.clip();
}

function drawBackground(){
    context.clearRect(0,0,canvas.width,canvas.height);
    context.font="32px red";
    context.fillText("html",canvas.width/2,canvas.height/2);
    context.restore();
}
function drawBlackGround(){
    context.save();
    context.fillStyle="black";
    context.fillRect(0,0,canvas.width,canvas.height);
    context.restore();
}
