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
    let oldTotal=document.getElementById('totalbal');
 
    let updateInput=parseInt(InputValue.value)
    let numberInput=parseInt(oldBalance.innerHTML)

    if (updateInput>0) {
        oldBalance.innerText=updateInput+numberInput;
       const oldTotalBal=parseInt(oldTotal.innerHTML)
        if (method=='deposite'){
            oldTotal.innerHTML=oldTotalBal+updateInput;
        }else{

            if (oldTotalBal>0 && oldTotalBal>=updateInput) {
                oldBalance.innerText=updateInput+numberInput;
                oldTotal.innerHTML=oldTotalBal-updateInput;
            }else{
                alert('wrong')
                oldBalance.innerText=0
            }
        }
    }
}
