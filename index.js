var loginbtn=document.getElementById('logbtn');
loginbtn.addEventListener("click",function(){
    var loginarea=document.getElementById('loginarea');
    loginarea.style.display='none'; // hide login section

    var calculation=document.getElementById('calculation');
    calculation.style.display='block'; // enter account

    var depositbutn=document.getElementById('depbtn');
    depositbutn.addEventListener('click',function(){
        var depinpt=document.getElementById('depinpt').value;
        
       var depbalance=document.getElementById('depBalance').value;
      var depositebalacne=parseFloat(depbalance);
      console.log(depinpt+depositebalacne)
    
       
       
        
    })
})