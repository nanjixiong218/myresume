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

canvas.onmousedown = function (){
    animate();
};
drawBackground();
function drawText(text){
    context.font = "32px red"
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.fillText(text,canvas.width/2,canvas.height/2);
}
function clipArc(radius){
    context.beginPath();
    context.arc(mid.x,mid.y,radius,0,Math.PI*2,true);
    context.stroke();
    context.clip();
}

function drawBackground(){
    context.clearRect(0,0,canvas.width,canvas.height);
    drawText("HTML5");
}
function fillCanvas(color){
    context.fillStyle = color;
    context.fillRect(0,0,canvas.width,canvas.height);
}
function drawAnimationFrame(radius){
    clipArc(radius);
    fillCanvas('lightgray');
    drawBackground();
}
function endAnimate(loop){
    console.log(1);
    setTimeout(function(){
        drawBackground();
    },1000);

}
function animate(){
    var radius = canvas.width/2;
    var ani = function(time){
        if(time === undefined){
            time = +new Date();
        }
        radius  = radius - canvas.width/100;
        fillCanvas('charcoal');
        if(radius>0){
            context.save();
            drawAnimationFrame(radius);
            context.restore();
            window.webkitRequestAnimationFrame(ani);
        }else{
           endAnimate();
        }

    };
    loop = window.webkitRequestAnimationFrame(ani);
}