
// document ready
    $(document).ready(function(){
       console.log("document ready");
    });

// Procedurally generate 30 day object

var cont = document.getElementById("calender");

for(var i = 1; i <31; ++i){
 var div = document.createElement("div");
 div.setAttribute("class", "square");
 div.setAttribute("id", "div" + i);
 
 var h1 = document.createElement("h1");
   h1.textContent = i;
   div.appendChild(h1);
   cont.appendChild(div);
 }