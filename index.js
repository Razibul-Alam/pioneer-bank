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
 
    let updateInput=parseInt(InputValue.value)
    let numberInput=parseInt(oldBalance.innerHTML)
        oldBalance.innerText=updateInput+numberInput;
    let oldTotal=document.getElementById('totalbal');
       const oldTotalBal=parseInt(oldTotal.innerHTML)
        oldTotal.innerHTML=oldTotalBal+updateInput;
 


let withdrawTotal=document.getElementById('totalbal');
   const withdrawTotalBal=parseInt(withdrawTotal.innerHTML)
    withdrawTotal.innerHTML=withdrawTotalBal-updateWithInput;

}
