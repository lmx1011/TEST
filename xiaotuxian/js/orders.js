window.onload=function(){
    var opay=document.getElementById("pay");
    var opaybutton=document.getElementById("pay-button");
    var opayment=document.getElementById("payment");
    var ocancelbutton=document.getElementById("cancel");
    opaybutton.onclick=function(){
        opay.style.display="none";
        opayment.style.display="block";
    }
    ocancelbutton.onclick=function(){
        opay.style.display="flex";
        opayment.style.display="none";
    }
}