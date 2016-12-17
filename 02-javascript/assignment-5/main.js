function initCal(){
  var start=document.getElementById("start").value;
  var rate=document.getElementById("rate").value;
  var years=document.getElementById("years").value;
  
 start=parseFloat(start);
  rate=parseFloat(rate);
  years=parseFloat(years);

    
  var tabstr="<table><tr><th>Month</th><th>Interest</th><th>Balance</th>";    
  var currentAmt= start; 
  for (var i=1; i<=years*12; i++) {
 var intrest= currentAmt * (((rate/100)/12));
    currentAmt+=intrest;
    currentAmt=Math.round(currentAmt*100)/100;
 tabstr+="<tr><td>"+i+"</td><td>"+intrest.toFixed(2)+"</td><td>"+currentAmt.toFixed(2)+"</td></tr>";
       }
    tabstr+="</table>";
    var pBin=document.getElementById("results_table");
    pBin.innerHTML=tabstr;
  
}

function reset(){
  document.getElementById("results_table").innerHTML="";
}