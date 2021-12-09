
const chessBoard = document.querySelector("#chessBoard");


const generateChessBoard = (x, y) => {
    for (let i=0; i<y; i++){
        let row = chessBoard.appendChild(document.createElement("div"));
        for (let j=0; j<x; j++){
            row.appendChild(document.createElement("span"));
        }
    }
}

generateChessBoard(3,3)