
let snake = {
    X:0,
    Y:0,
    H:40,
    W:40,
    obj:0,
    victoire:6,
    direction:"N",
    inLive:true
};

let target = {
    X:0,
    Y:0,
    text:""
}
let input ={
    in:[]
}


var left = document.querySelector("#left")
left.addEventListener("click", function(){
    snake.direction="O";
    konami("O")
})

left.innerHTML = '&larr;';

var rigth = document.querySelector("#rigth")
rigth.addEventListener("click", function(){
    snake.direction = "E";
    konami("E")
})
rigth.innerHTML = '&rarr;';

var up = document.querySelector("#up")
up.addEventListener("click", function(){
    snake.direction = "N";
    konami("N")
})
up.innerHTML = '&darr;';

var down = document.querySelector("#down")
down.addEventListener("click", function(){
    snake.direction = "S";
    konami("S")
})
down.innerHTML = '&uarr;';

var A = document.querySelector("#A")
A.addEventListener("click", function(){
    konami("A")
})

var B = document.querySelector("#B")
B.addEventListener("click", function(){
    konami("B")
})



function konami(inp){
    const kona = ["S", "S", "N", "N", "O", "E", "O", "E", "B", "A"];
    if(input.in.length<=9){
        input.in.push(inp);
    } else {
        for(let i=1; i<10; i++){
            input.in[i-1]=input.in[i];
        }
        input.in[9] = inp
    }
    let found = true
    for(let i=0; i<=10 && found; i++){
        if(input.in[i] !== kona[i]){
            found = false
        }   
    }
    if(found){
        window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank');
    }
}
function attraper(){
    let objectifs = ["pédophile", "agréssion", "PD", "Connard", "Gouine"];
    target.text = objectifs[Math.floor(Math.random()*objectifs.length)];
    target.X = (Math.random()*(canvas.width-50))+25;
    target.Y = (Math.random()*canvas.height-25)+25;
}

function check_attrape(){
    const distX = Math.abs(target.X - snake.X);
    const distY = Math.abs(target.Y - snake.Y);
    const dist = Math.sqrt( distX*distX + distY*distY );
    if(dist <= (snake.H+snake.W)/2){
        snake.obj++;
        attraper();
    }
}

function check_live(){
    canvas = document.querySelector("#canvas_snake");
    if(snake.X >= canvas.width-(snake.W/2) || snake.X <= 0+snake.W/2 || snake.Y >= canvas.height-snake.H/2 || snake.Y-snake.H/2 <= 0){
        snake.inLive = false;
    }
}

function tic(){
    canvas = document.querySelector("#canvas_snake");
    var ctx = canvas.getContext("2d");
    if(snake.obj < snake.victoire) {
        if(snake.inLive){
            switch(snake.direction){
                case "N" :
                    snake.Y++;
                break;
                case "S" : 
                    snake.Y--;
                break;
                case "E" : 
                    snake.X++;
                break;
                case "O" :
                    snake.X--;
                break;
            }
            check_live();
            check_attrape();
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillRect(snake.X-snake.W/2, snake.Y-snake.H/2, snake.H, snake.W);
            ctx.fillText(target.text, target.X, target.Y);
            ctx.fillText("Point : " + snake.obj + "/" + snake.victoire, 10, 10);
        } else {
            ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
            ctx.clearRect(0, 0, canvas.width,  canvas.height);
            ctx.fillText("Perdu !!!", canvas.width/2, canvas.height/2);
        }
    }else{
        ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
        ctx.clearRect(0, 0, canvas.width,  canvas.height);
        ctx.fillText("Gagné !!!", canvas.width/2, canvas.height/2);
    }
}

snake.direction = "N"
let iter = 0;
snake.inLive = true;
canvas = document.querySelector("#canvas_snake");
snake.X = canvas.width/2;
snake.Y = canvas.height/2;
attraper();
setInterval(tic, 10);
