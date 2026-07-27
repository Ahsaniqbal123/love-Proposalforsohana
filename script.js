const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

if(noBtn){

noBtn.addEventListener("mouseover",()=>{

const x = Math.floor(Math.random()*300)-150;
const y = Math.floor(Math.random()*200)-100;

noBtn.style.transform =
`translate(${x}px,${y}px)`;

});

}

if(yesBtn){

yesBtn.addEventListener("click",()=>{

document.getElementById("proposalPage").style.display="none";

document.getElementById("successPage").style.display="block";

createConfetti();

});

}

function createConfetti(){

for(let i=0;i<50;i++){

const heart=document.createElement("div");

heart.innerHTML="❤️";

heart.className="heart";

heart.style.left=Math.random()*100+"vw";

heart.style.animationDuration=
(Math.random()*4+3)+"s";

document.body.appendChild(heart);

setTimeout(()=>{
heart.remove();
},7000);

}

}

setInterval(()=>{

const heart=document.createElement("div");

heart.innerHTML="❤️";

heart.className="heart";

heart.style.left=Math.random()*100+"vw";

heart.style.animationDuration=
(Math.random()*5+5)+"s";

document.body.appendChild(heart);

setTimeout(()=>{
heart.remove();
},10000);

},500);
