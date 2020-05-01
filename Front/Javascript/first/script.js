var bo = document.querySelector("h1");
var body = document.querySelector("body");
var b = document.querySelector("button");
bo.style.color = "#f7600e";
bo.classList.add("aw");
var th = true;
b.addEventListener("click",function() {
    if(th)
   { 
       b.textContent = "Light theme";
        body.classList.add("dark");
    th = false;
    } else{
        b.textContent = "Dark theme";
        body.classList.remove("dark");
        th = true;
    }
});

var p1 = document.getElementById("p1");
var p2 = document.getElementById("p2");
var p1display = document.querySelector("#p1Display");
var p2display = document.querySelector("#p2Display");
var p1Score = 0;
var p2Score = 0;
var GameOver = false;
var limit = 5;
var inputVal = document.querySelector("input"); 
var reserBtn = document.getElementById("reset");
var showLimit =document.querySelector("p span");
reserBtn.addEventListener("click",function(){
    reset();
});
p1.addEventListener("click",function(){
    if(!GameOver)
    {
        p1Score++;
        if(p1Score === limit)
        {
            p1display.classList.add("winner"); 
            GameOver = true;
        }
        p1display.textContent = p1Score;
    }
});

p2.addEventListener("click",function(){
    if(!GameOver)
    {
        p2Score++;
        if(p2Score === limit)
        {
            p2display.classList.add("winner");
            GameOver = true;
        }
        p2display.textContent = p2Score;
    }
});


function reset(){
    p1Score = 0;
    p2Score = 0;
    GameOver  = false;
    p1display.classList.remove("winner");
    p2display.classList.remove("winner");
    p1display.textContent = p1Score;
    p2display.textContent = p2Score;
}   
inputVal.addEventListener("change",function(){
    showLimit.textContent = this.value;
    limit = Number(this.value);
    reset();
});




























