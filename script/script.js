function registeraccount_onclick(){
	window.location.href = "register.html";
}

function traininglog_onclick(){
	window.location.href = "underpagelogs.html";
}

function calculator_onclick(){
	window.location.href = "underpagecalculator.html";
}

function map_onclick(){
	window.location.href = "underpagemap.html";
}

function exercises_onclick(){
	window.location.href = "underpagemuscles.html";
}

function about_onclick(){
	window.location.href = "underpageabout.html";
}

<<<<<<< HEAD


function calculator(){
  var vikt;
  var total;
  
  //var viktplattor = ["nmbr25", "nmbr20", "nmbr15", "nmbr10", "nmbr5", "nmbr2.5", "nmbr2", "nmbr1.5", "nmbr1.25", "nmbr1", "nmbr0.5"];
  
  
  
  
  vikt = (document.getElementById("inText").value);
  total = (vikt-(document.getElementById("stangVikt").value));
  
  
  document.getElementById("result1").innerHTML =  Math.floor(total/50);
  
  total1 = total/50;
  total1 = total%50;
  
  document.getElementById("result2").innerHTML =  Math.floor(total1/40);
  
  total2 = total1/40;
  total2 = total1%40;
  
  document.getElementById("result3").innerHTML =  Math.floor(total2/30);
  
  total3 = total2/30;
  total3 = total2%30;
  
  document.getElementById("result4").innerHTML =  Math.floor(total3/20);
  
  total4 = total3/20;
  total4 = total3%20;
  
  document.getElementById("result5").innerHTML = Math.floor(total4/10);
  
  total5 = total4/10;
  total5 = total4%10;
  
  document.getElementById("result6").innerHTML =  Math.floor(total5/5);
  
  total5 = total5/5;
  total6 = total5%5;
  
  document.getElementById("result7").innerHTML = Math.floor(total6/4);
  
  total7 = total6/4;
  total7 = total6%4;
  
  document.getElementById("result8").innerHTML =  Math.floor(total7/3);
  
  total8 = total7/3;
  total8 = total7%3;
  
  document.getElementById("result9").innerHTML =  Math.floor(total8/2.5);
  
  total9 = total8/2.5;
  total9 = total8%2.5;
  
  document.getElementById("result10").innerHTML =  Math.floor(total9/2);
  
  total10 = total9/2;
  total10 = total9%2;
  
  document.getElementById("result11").innerHTML = Math.floor(total10/1);
  
  total11 = total10/1;
  total11 = total10%1;
  
  
  alert("total="+total+"; total1="+(total/50));
  
  for(i=0; i<total1; i++)
  {
    
   document.write("<img src='C:\xampp\htdocs\Gy\iLifter\bilder\25kg.png'>");
  }
  
  for(i=0; i<total1; i++)
  {
    
  }
  
  for(i=0; i<total2;i++)
  {
    
  }
  for(i=0; i<total3;i++)
  {
    
  }
  
  for(i=0; i<total4;i++)
  {
    
  }
  
  for(i=0; i<total5;i++)
  {
    
  }
  for(i=0; i<total6;i++)
  {
    
  }
  
  for(i=0; i<total7;i++)
  {
    
  }
  
  for(i=0; i<total8; i++)
  {
    
  }
  
  for(i=0; i<total9; i++)
  {
    
  }
  
  for(i=0; i<total10; i++)
  {
    
  }
 
   
}
calculator();
=======
function initMap() {
        var uluru = {lat: -25.363, lng: 131.044};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 4,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }
>>>>>>> 75911ae9c3dbf6c9fd2f21f46661f6b106303aa9
