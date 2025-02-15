let boardNode = document.querySelector("#gridContainer");
let boardButton = document.getElementById("boardGenerator");
let cellCount = 100;

boardButton.onclick = ()=>{
    cellCount = prompt("Enter cells per side");
    if(cellCount < 100){
        let currentCells = document.getElementsByClassName("cells");
        for(let i = 0; i < currentCells.length;i){
            boardNode.removeChild(currentCells[i]);
        }
        generateBoard(boardNode,cellCount);
    }else{
        cellCount = alert("too many cells, reenter");
    }
    
};
function createCells(cellCount){
    let newCell = document.createElement("div");
    newCell.classList.add("cells");
    newCell.setAttribute("style",`width:${960/cellCount}px; height:${960/cellCount}px`);
    return newCell;
}
function generateBoard(board, cellCount){
    
    for(let i = 0; i < cellCount; i++){
        for(let j = 0; j < cellCount; j++){
            board.appendChild(createCells(cellCount))
        }
    }
    
}

boardNode.addEventListener("mouseenter", ()=>{
    boardNode.addEventListener("mousemove", (e)=>{
        e.target.style.backgroundColor = "black";
    })
});
generateBoard(boardNode, cellCount);
//to wrap when n element is on a row, flex-basis = 960px/n elements