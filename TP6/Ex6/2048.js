const canva = document.getElementById("game");

var gameGrid = new Array(4);
for (var i = 0; i < 4; i++) gameGrid[i] = new Array(4).fill(0);

const colors = {
    0: "white",
    1: "yellow",
    2: "orange",
    3: "red",
    4: "black",
    5: "black",
    6: "black",
    7: "black",
    8: "black"
}

gameGrid[2][1] = 2
gameGrid[2][0] = 2

drawGame();

document.onkeydown = (event) => {
    var key = event.key;
    console.log(key)
    switch (key) {
        case "ArrowDown":
            moveDown();
            break;
        case "ArrowRight":
            moveRight();
            break;
        case "ArrowUp":
            moveUp();
            break;
        case "ArrowLeft":
            moveLeft();
            break;
        default:
            return;
    }

    addRandom2();
    drawGame()

}

function moveRight(){
    gameGrid.forEach(element => {
        element = element.reverse()
    });
    moveLeft();
    gameGrid.forEach(element => {
        element = element.reverse()
    });
}

function moveDown(){
    gameGrid = transpose(gameGrid);
    moveRight()
    gameGrid = transpose(gameGrid);
}

function moveUp(){
    gameGrid = transpose(gameGrid);
    moveLeft()
    gameGrid = transpose(gameGrid);
}

function transpose(matrix) {
    return matrix[0].map((col, i) => matrix.map(row => row[i]));
  }

function moveLeft(){
    
    gameGrid.forEach((ligneArray, ligneIndex) => {
        console.log(ligne);

        ligneArray.forEach((cellValue, colIndex) => {
            
            if(cellValue==0)return;

            if(ligneArray[colIndex-1]==cellValue){
                ligneArray[colIndex]=0
                ligneArray[colIndex-1]++
            }

            if(ligneArray[colIndex-1]==0){
                ligneArray[colIndex]=0
                ligneArray[colIndex-1]=cellValue
                moveLeft();
            }

        });

    });

}

function addRandom2(){
    if(allCellsAreFull()){
        console.log("Game Over")
        return;
    }

    casey = 0;
    casex = 0;
    do {
        var randomCase = Math.floor(Math.random()*16);
        casey = Math.floor(randomCase/4);
        casex = randomCase - (4*casey);
        console.log(casey+" "+casex);

    } while (gameGrid[casey][casex] != 0)
    
    gameGrid[casey][casex] = 1;
}

function caseIsEmpty(x, y){
    return gameGrid[y][x]==0;
}

function allCellsAreFull(){
    for(let y=0; y<4; y++){
        for(let x=0; x<4; x++){
            if(gameGrid[y][x]==0) return false;
        }
    }
    return true;
}

function drawGame() {
    var context = canva.getContext("2d")

    //Draw brackground
    context.rect(0, 0, canva.width, canva.height)
    context.fillStyle = "grey"
    context.fill()
    context.stroke();

    for (ligne = 0; ligne < 4; ligne++) {
        for (colone = 0; colone < 4; colone++) {

            cell = gameGrid[ligne][colone];


            drawCase(colone, ligne, cell)
        }
    }

}

function drawCase(x, y, number) {
    var context = canva.getContext("2d")
    context.beginPath();

    context.strokeStyle = "black";
    context.fillStyle = colors[number]
    context.lineWidth = "2";
    context.rect(10 + 200 * x, 10 + 200 * y, 180, 180);
    context.fill()
    context.stroke();

    if (number != 0) {
        context.fillStyle = "white";
        context.font = "30px Arial";
        context.textAlign = "center"
        context.textBaseLine = "middle"
        context.fillText(2 ** number, 100 + 200 * x, 100 + 200 * y);
    }
}

function clearGame() {
    var context = canva.getContext('2d');
    context.clearRect(0, 0, canva.width, canva.height)
}
