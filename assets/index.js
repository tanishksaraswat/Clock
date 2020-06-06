function clockManipulation(){
    var time = new Date();
    var h = time.getHours();
    var m = time.getMinutes();
    var s = time.getSeconds();
    
    var d;
    
    if(h>=12){
        d = "PM";
    }
    else{
      d = "AM";
    }
   
    
    if(h>12){
      h-=12;
    }
    if(h==0){
      h = 12;
    }
    
    if(h < 10) h = "0"+h;
    if(m < 10) m = "0"+m;
    if(s < 10) s = "0"+s;
    
    document.getElementById("clock").innerHTML = h+":"+m+":"+s+" "+d;
    
  }
  
  setInterval(clockManipulation, 500);
  