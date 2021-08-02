// ***** select enter button and hide login form 
var loginarea=document.getElementById('loginarea');
var calculation=document.getElementById('calculation');
document.getElementById('logbtn').addEventListener("click",function(){
    loginarea.style.display='none'; // hide login section
    calculation.style.display='block'; // enter account
})

const setAllValue=(method)=>{
    let InputValue=document.getElementById(`${method}Input`);
    let oldBalance=document.getElementById(`${method}balance`)
    let oldTotal=document.getElementById('totalbal')
 if (method=='deposite') {
    let updateInput=parseInt(InputValue.value)
    let depositeValue=parseInt(oldBalance.innerHTML)
        oldBalance.innerText=updateInput+depositeValue;
    let oldTotal=document.getElementById('totalbal');
       const oldTotalBal=parseInt(oldTotal.innerHTML)
        oldTotal.innerHTML=oldTotalBal+updateInput;
 }
else{
let updateWithInput=parseInt(InputValue.value)
let oldBalance=document.getElementById('withdrawbalance')
let withdrawValue=parseInt(oldBalance.innerHTML)
    oldBalance.innerHTML=updateWithInput+withdrawValue;
let withdrawTotal=document.getElementById('totalbal');
   const withdrawTotalBal=parseInt(withdrawTotal.innerHTML)
    withdrawTotal.innerHTML=withdrawTotalBal-updateWithInput;
}
}
