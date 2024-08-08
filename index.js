
function tipcal(){
    let billamt=document.getElementById("amt").value;
    let tipamt=document.getElementById("perc").value;
     
    let tip=(billamt*tipamt)/100;
    let total=Number(billamt)+tip;
    document.getElementById("amount").innerHTML=tip;
    document.getElementById("bill").innerHTML=total;

}