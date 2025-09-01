let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".reset");
let turnInfo = document.querySelector(".turnInfo");
let result = document.querySelector(".result");
let winCount = document.querySelector(".winCount");
let turn = "X";
let isGameOver = false;
let xWin = 0;   
let oWin = 0;
const changeTurn = ()=>{
    return turn === "X"?"O":"X";
}
const checkWin = ()=>{  
    let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    wins.forEach(e=>{
        if((boxes[e[0]].innerText === boxes[e[1]].innerText) && (boxes[e[1]].innerText === boxes[e[2]].innerText) && (boxes[e[0]].innerText !== "")){
            isGameOver = true;
            result.innerText = boxes[e[0]].innerText + " Won";
            if(result.innerText === "X Won"){
                xWin += 1;
            }else{
                oWin += 1;
            }
            winCount.innerText = `X = ${xWin} : O = ${oWin}`;
        }
    })
}   
boxes.forEach(box=>{
    box.addEventListener('click',()=>{
        if(box.innerText === "" && !isGameOver){
            box.innerText = turn;
            turn = changeTurn();
            checkWin();
            if(!isGameOver){
                turnInfo.innerText = "Turn for " + turn;
            }else{
                turnInfo.innerText = "Game Over";
            }
        }
    })
})
resetbtn.addEventListener('click',()=>{
    boxes.forEach(box=>{
        box.innerText = "";
    })
    turn = "X";
    isGameOver = false;
    turnInfo.innerText = "Turn for " + turn;
    result.innerText = "";
})
winCount.innerText = `X = ${xWin} : O = ${oWin}`;
turnInfo.innerText = "Turn for " + turn;
result.innerText = "";


