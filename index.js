
const dodger = document.getElementById("dodger")
dodger.style.backgroundColor = "#CCFF00"

const vertical = parseInt(dodger.style.bottom.replace('px', ''), 10)
const horizontal = parseInt(dodger.style.left.replace('px', ''), 10)

function moveDodgerRight() {
    horizontal < 360 ? dodger.style.left = `${horizontal + 10}px`: console.log("no right")}
    
function moveDodgerLeft() {
    horizontal > 0 ? dodger.style.left =  `${horizontal - 10}px`: console.log("no left");}
            

document.addEventListener("keydown", (e) => {
    moveDodgerLeft(e)
    moveDodgerRight(e)
})


    





