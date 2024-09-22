let currMoleTile
let currPlantTile
let score=0;
let gameOver=false;


//window.onload = window load cheyyumbo
window.onload=function(){
    setGame()
}

function setGame(){
    //set up the grid for game board in html
 for(let i=0;i<9;i++){
    //i goes from 0 to 8 and stops at 9
    //we create a 9 div id=0-8 
    let tile=document.createElement("div")
    tile.id = i.toString();
    tile.addEventListener("click",selectTile)
    document.getElementById('board').appendChild(tile)
 }
setInterval(setMole, 1000);//this will call setmole fn in every 20000millisec
setInterval(setPlant,2000)
}

function getRandomTile(){
   // The Math.random() function gives you a decimal number between 0 (inclusive) and 1 (exclusive).
    //So, when you multiply it by 9, you get a random decimal number between 0 and 8.9999…
        let num=Math.floor(Math.random() *9);
    return num.toString();

}

function setMole(){
    if(gameOver){
        return;
    }

if(currMoleTile){
    currMoleTile.innerHTML="";
}

    let mole=document.createElement("img")
    mole.src = './monty-mole.png';

    let num=getRandomTile();
    if(currPlantTile && currPlantTile.id == num){
        return
    }
    currMoleTile = document.getElementById(num)
    currMoleTile.appendChild(mole)
}

function setPlant() {
    if(gameOver){
        return;
    }
    if(currPlantTile){
        currPlantTile.innerHTML='';
    }
    let Plant = document.createElement('img')
    Plant.src='./piranha-plant.png'

    let num = getRandomTile();
    if(currMoleTile && currMoleTile.id == num){
        return;
    }
    currPlantTile=document.getElementById(num);
    currPlantTile.appendChild(Plant)
}

function selectTile(){
if(gameOver){
    return;
}

    if(this == currMoleTile){
        score +=2;
        document.getElementById("score").innerText=score.toString()
    }else if(this==currPlantTile){
        document.getElementById("score").innerText='GAME OVER:'+ score.toString()

    }
}