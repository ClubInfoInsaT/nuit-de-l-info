window.onload = function(){
    init1();
}

function init1(){
    im = new Image();
    im.src = "./Images/condom.png"

    listSpe = [];
    speedCreationSpe = 0;
    speedSpe = 0;
    maxSpeKilled = 0;
    currentSpeKilled = 0;

    
    monCanvas = document.getElementById("dessin");
    if (monCanvas.getContext){
        context = monCanvas.getContext('2d');
    } else {
        alert('canvas non supporté')
    }
    console.log(monCanvas.height, monCanvas.width);

    document.getElementById("start-button").addEventListener('click', startGame, false);
    monCanvas.addEventListener("click", isSpeClicked, false); 
}

function startGame(){
    document.getElementById("game-start").style.display = "none";
    document.getElementById("game-content").style.display = "inline";
    createSpe();
    var val = document.getElementById("select-difficulty").value;
    if(val=="easy"){
        speedCreationSpe = 2000;
        speedSpe = 5;
        maxSpeKilled = 10;
    } else if(val=="medium"){
        speedCreationSpe = 500;
        speedSpe = 7;
        maxSpeKilled = 20;
    }else if(val=="hard"){
        speedCreationSpe = 300;
        speedSpe = 7;
        maxSpeKilled = 30;
    }
    interCreation = setInterval(createSpe, speedCreationSpe);
    interAnimation = setInterval(Anime, 10);
    
}

function Anime(){
    var listDeletedSpe = [];
    context.clearRect(0, 0, monCanvas.width, monCanvas.height);
    context.drawImage(im, 0, 0, 750, 360);
    if(listSpe.length != 0){
        context.clearRect(0, 0, monCanvas.width, monCanvas.height);
        context.drawImage(im, 0, 0, 750, 360);

        for (var j=0; j<listSpe.length; j++){
            var spe = listSpe[j];
            if(spe[0] > 550){
                //console.log("its good");
                drawSpe(spe,true);
                listDeletedSpe.push(j);
            }else{
                drawSpe(spe,false);
            }
        }
        
        if(listDeletedSpe.length != 0){
            //console.log(listDeletedSpe);
            for(var k=0; k<listDeletedSpe.length; k++){
                listSpe.splice(listDeletedSpe[k],1);
            }
        }
        
    }
}

function drawSpe(spe,deleted,index){
    if(!deleted){
        spe[0] += speedSpe;
        context.save();
        context.translate(spe[0],spe[1])
        context.fillStyle='blue';
        context.fillRect(0,0,50,15);  
        context.restore();
    } else {
        updateLife();
    }
}


function createSpe(){
    var x = 0;
    var y = getRandomInt(70,monCanvas.height-80);
    var newSpe = [x,y]
    listSpe.push(newSpe); 
    console.log(listSpe);
}



function isSpeClicked(e) {
    // position de la souris dans le doc
    var xSourisDocument = e.pageX;
    var ySourisDocument = e.pageY;

    //position du Canvas dans le doc
    var xCanvas = monCanvas.offsetLeft;
    var yCanvas = monCanvas.offsetTop;
    //poisition du clic par rapport au Canvas
    xSourisCanvas = xSourisDocument - xCanvas;
    ySourisCanvas = ySourisDocument - yCanvas;

    if(listSpe.length != 0){
        for (var j=0; j<listSpe.length; j++){
            if(listSpe[j][0] <= xSourisCanvas && xSourisCanvas <= listSpe[j][0]+55) {
                if(listSpe[j][1] <= ySourisCanvas && ySourisCanvas <= listSpe[j][1]+20) {
                    listSpe.splice(j,1)
                    currentSpeKilled +=1;
                    if(currentSpeKilled==maxSpeKilled){
                        endGame(true);
                    }
                }
            }
            
        }
    }
}

function updateLife(){
    var val = (document.getElementById("life").offsetWidth / 300)*100;
    val = val - 20
    console.log(val);
    document.getElementById("life").style.width = val+"%"
    if(val==0){
        endGame();
    }
}

function endGame(goodEnding){
    clearInterval(interCreation);
    clearInterval(interAnimation);
    document.getElementById("game-content").style.display = "none";
    document.getElementById("game-end").style.display = "flex"
    if(goodEnding){
        document.getElementById("game-end").innerHTML = "Bravo vous avez réussi ! Protegez-vous bien !";
    }else {
        document.getElementById("game-end").innerHTML = "La capote a craqué ! Comment vous réagiriez dans cette situation ?";
    }
    
}


//renvoie un nombre aléatoire compris dans un intervalle
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
  }

