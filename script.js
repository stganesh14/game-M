const cursor = document.querySelector('.cursor');
const body =document.getElementById('body');
const boxContainer = document.querySelectorAll('.box');
const game = document.getElementById('game');
let remainingBoxes = boxContainer.length;
let score = 0;
const scoreHeading = document.getElementById('score');
document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px;")
})
document.addEventListener('touchmove', e => {
    cursor.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px;")
})
function victory(){
    body.style.backgroundColor = "black";
    scoreHeading.innerText ="Victory";
    scoreHeading.style.marginTop = 20 +"%";
}
function checkvictory(){
    if(remainingBoxes == 0){
        victory();
    }
}
game.addEventListener('mousemove', e => {
    const box = e.target.classList.contains('box')
    if(box){
        e.target.classList.add('hidden');
        score +=1;
        remainingBoxes -=1;
        scoreHeading.innerText = "Score : " + score;
        checkvictory();
    }
})
game.addEventListener('touchmove', e => {
    const box = e.target.classList.contains('box')
    if(box){
        e.target.classList.add('hidden');
        score +=1;
        remainingBoxes -=1;
        scoreHeading.innerText = "Score : " + score;
        checkvictory();
    }
})
