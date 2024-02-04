const ya=document.getElementById("ya");
const nop=document.getElementById("nop");
let myht=['70px' , '100px', '120px','140px'];
let mywt=['80px', '110px', '130px' ,'150px'];
let myna=["you sure?", "think again","you might regret"]
let i=0;
let j=0;

function size(){
ya.style.height=myht[i++];
ya.style.width=mywt[j++];
   
}


nop.addEventListener("click",size);