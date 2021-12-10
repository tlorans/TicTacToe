// RULE OF THUMB:
// IF YOU NEED ONE SOMETHING USE A MODULE
// IF YOU NEED MULTIPLES, CREATE WITH FACTORIES



// module pattern
const chessBoard = (() => {
    const chessBoard = document.querySelector("#chessBoard");
    const generateChessBoard = (x, y) => {
        for (let i=0; i<y; i++){
            let row = chessBoard.appendChild(document.createElement("div"));
            for (let j=0; j<x; j++){
                row.appendChild(document.createElement("span"));
            }
        }
    };

    const displayController = document.querySelector("#displaycontroller");

    const createDisplayController = (type) => {
        let display = document.createElement("button")
        display.className = type + "Button"
        if (type === "cross"){
            display.innerText = "X"
        } else {
            display.innerText = "0"
        }
        displayController.appendChild(display);
    }

    createDisplayController("cross");
    createDisplayController("round");
    
    // we invoke the generateChessBoard method within the module.
    // doing so, no one can access it and modify the chessboard format with this function
    generateChessBoard(3,3)
})()

// Factory for players
const Player = (camp) => {



}




