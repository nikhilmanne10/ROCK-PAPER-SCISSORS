let userscore=0;
let compscore=0;
const choices=document.querySelectorAll(".choice");
const msgcont=document.querySelector("#msg");
const userscorepara=document.querySelector("#user-score");
const compscorepara=document.querySelector("#comp-score");
const drawgame =()=>{
    console.log("Draw Game");
    msgcont.innerText="Draw";
}

const showwinner=(userwin)=>{
    if(userwin){
        userscore++;
        userscorepara.innerText=userscore;
        console.log("win")
        msgcont.innerText="yay! you win";
        
    }
    else{
        compscore++;
        compscorepara.innerText=compscore;
        console.log("lose")
        msgcont.innerText="you lose";
    }
}

const compgen = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
  };

const playgame=(userchoice)=>{
    console.log("userchoice=",userchoice);
    const compchoice=compgen();
    console.log("compchoice = ",compchoice)


if(userchoice===compchoice){
    drawgame();
}
else
{
let userwin=true;

if(userchoice==="rock"){
    userwin=compchoice==="paper" ? false:true;
}
else if(userchoice==="scissors"){
    userwin=compchoice==="paper"? true:false;
}
else {
userwin=compchoice==="rock"?false:true;
}
showwinner(userwin);
}
}

choices.forEach((choice)=>{
    console.log(choice);
choice.addEventListener("click",()=>{
    const userchoice=choice.getAttribute("id");
    playgame(userchoice);
})
})
