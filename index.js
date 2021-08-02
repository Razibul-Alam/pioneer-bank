// ***** select enter button and hide login form 
var loginarea=document.getElementById('loginarea');
var calculation=document.getElementById('calculation');
document.getElementById('logbtn').addEventListener("click",function(){
    loginarea.style.display='none'; // hide login section
    calculation.style.display='block'; // enter account
})

const setAllValue=(method)=>{
 if (method=='increase') {
    let depositeInput=document.getElementById('depinpt');
    let updateInput=parseInt(depositeInput.value)
    let depositeOldBalance=document.getElementById('depBalance')
    let depositeValue=parseInt(depositeOldBalance.innerHTML)
        depositeOldBalance.innerText=updateInput+depositeValue;
    let oldTotal=document.getElementById('totalbal');
       const oldTotalBal=parseInt(oldTotal.innerHTML)
        oldTotal.innerHTML=oldTotalBal+updateInput;
 }
else{
    let withdrawInput=document.getElementById('withinpt');
let updateWithInput=parseInt(withdrawInput.value)
let withdrawOldBalance=document.getElementById('witdBalance')
let withdrawValue=parseInt(withdrawOldBalance.innerHTML)
    withdrawOldBalance.innerHTML=updateWithInput+withdrawValue;
let withdrawTotal=document.getElementById('totalbal');
   const withdrawTotalBal=parseInt(withdrawTotal.innerHTML)
    withdrawTotal.innerHTML=withdrawTotalBal-updateWithInput;
}
}
