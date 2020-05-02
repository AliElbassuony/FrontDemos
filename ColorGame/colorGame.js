var numSqares = 6;
let colors = generate(numSqares);
let squares = document.querySelectorAll(".square");
let pickedColor = pickColor();
let colorDisplay = document.getElementById("colorDisplay");
let message = document.querySelector("#message");
let btn = document.querySelector(".btn");
let easyBtn = document.querySelector("#easyBtn");
let hardBtn = document.querySelector("#hardBtn");
let h1 = document.querySelector("h1");
easyBtn.addEventListener("click",function(){
    hardBtn.classList.remove("selected");
    this.classList.add("selected");
    numSqares = 3;
    colors = generate(numSqares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(let i = 0;i < squares.length ;i++)
    {
        if(colors[i])
        {
            squares[i].style.backgroundColor = colors[i];
        }else{
            squares[i].style.display = "none";
        }
    } 
});
hardBtn.addEventListener("click",function(){
    this.classList.add("selected");
    easyBtn.classList.remove("selected");
    numSqares = 6;
    colors = generate(numSqares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(let i = 0;i < squares.length ;i++)
    {
            squares[i].style.backgroundColor = colors[i];
            squares[i].style.display = "block";
        
    } 
})

colorDisplay.textContent = pickedColor;

btn.addEventListener("click",function(){
    colors = generate(numSqares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    message.textContent = "";
    this.textContent = "New Colors";
    for (let i = 0; i < squares.length; i++) {
            squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor="steelblue";
});

for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];

    //add click listener to squers
    squares[i].addEventListener("click",function(){
        
        let clickedColor = this.style.backgroundColor;

        if(pickedColor === clickedColor)
        {
            message.textContent = "Correct";
            h1.style.backgroundColor=pickedColor;
            btn.textContent = "Play Again?";
            changeColors(pickedColor);
        }
         else{
            message.textContent = "Wrong";
             this.style.backgroundColor = "#232323";
         }
    })
}
function changeColors(color){
    for (let i = 0; i < squares.length; i++) {
            squares[i].style.backgroundColor = pickedColor;
        
    }
}
function pickColor(){
    let random = Math.floor(Math.random() * colors.length);
    return colors[random];
}
function generate(num){
     let arr = [];
    for (let i = 0; i < num; i++) {
        arr.push(randomColor());            
    }
    return arr;
}
function randomColor(){
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let str = "rgb(" + r + ", " + g + ", " + b + ")"; 
    return str;
}