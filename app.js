let gameseq = [];
let userseq = [];
let color = ["red", "blue", "green", "yellow"];
let level = 0;
let isStarted = false;
let h2 = document.querySelector("h2");
document.addEventListener("keydown", function () {
    if (isStarted == false) {
        isStarted == true;
        levelup();
    }
})

function levelup() {
    userseq=[];
    level++;
    if (level < 4) {
        h2.innerText = "level " + level + " easy";
    } else if (level < 7) {
        h2.innerText = "level " + level + " modarate";
    } else {
        h2.innerText = "level " + level + " hard";
    }
    let random = color[Math.floor(Math.random() * 4)];
    gameseq.push(random);
    let randomcolor = document.querySelector(`.${random}`);
    btnflash(randomcolor);

}

function btnflash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 200);
}

function buttonpress() {
    let btn = this;
    let color=btn.getAttribute("id");
    userseq.push(color);
    userflash(btn);
    check(userseq.length-1);
}

let buttons = document.querySelectorAll(".button");
for (i of buttons) {
    i.addEventListener("click", buttonpress);
}

function userflash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 200);
}
 
function check(index){
    if(gameseq[index]==userseq[index]){
        if(gameseq.length==userseq.length){
            setTimeout(levelup,1000);
        }
    }else{
        document.querySelector("body").style.backgroundColor="red";
        h2.innerHTML="Game Over!<br> your score was "+level+"<br>Press any key to start again";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";  
        },300);
        reset();
    }
}

function reset(){
    gameseq=[];
    userseq=[];
    isStarted=false;
    level=0;

    
}
