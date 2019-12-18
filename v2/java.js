function Event(target, time, type){
  this.target = target;
  this.time = time;
  this.type = type;
  this.toString = function(){
    return JSON.stringify(this);
  }
}

  window.addEventListener("load", function(e){
    ee = new Event(e.target, e.timeStamp, e.type);
    localStorage.setItem('load', ee.toString());
  });

  window.addEventListener("unload", function(e){
    ee = new Event(e.target, e.timeStamp, e.type);
    localStorage.setItem('unload', ee.toString());
  });
  
  function randomNumber(min, max){
    return Math.floor(Math.random() * (max - min)) + min;
}
generate = document.getElementById("id1");
generate.addEventListener("click", function(e){
    c = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    buttonlist = document.createElement("div");
    imagelist = document.createElement("div");
    document.getElementById("id2").innerHTML = "";
    n = document.getElementById("id0").value;
    for(i=0;i<n;i++){
      r = randomNumber(0, 26);
      let chrbutton = document.createElement("input");
      chrbutton.setAttribute("type", "submit");
      chrbutton.value = c[r];
      let img = document.createElement("img");
      img.setAttribute("style", "display:none");
      img.src = c[r] + ".jpg";
      buttonlist.appendChild(chrbutton);
      imagelist.appendChild(img);
      chrbutton.addEventListener("click", function(){
        for(i = 0; i<imagelist.getElementsByTagName("img").length; i++){
          imagelist.getElementsByTagName("img")[i].setAttribute("style", "display:none");
        }
        img.setAttribute("style", "display:block");
      });
      document.getElementById("id2").appendChild(buttonlist);
      document.getElementById("id2").appendChild(imagelist);
    }
    ee = new Event("button", e.timeStamp, e.type);
    localStorage.setItem('click', ee.toString());
});
interval = setInterval(function() {
    let events = Array();
    if(JSON.parse(localStorage.getItem('load')) != null){
      events.push(JSON.parse(localStorage.getItem('load')));
    }
    if(JSON.parse(localStorage.getItem('click')) != null){
      events.push(JSON.parse(localStorage.getItem('click')));
    }
    if(JSON.parse(localStorage.getItem('unload')) != null){
      events.push(JSON.parse(localStorage.getItem('unload')));
    }
	
  if(events.length > 0){
    $.ajax("post.php", {
      data : "data="+JSON.stringify(events),
      type : 'POST',
      success: function(){
        localStorage.clear();
      }
    });
  }
}, 5000);

function show(){
  showdiv = document.getElementById("show");
  showdiv.innerHTML = "";
  $.ajax("get.php", {
    type : 'GET',
    success: function(data){
      data = JSON.parse(data);
      data.forEach(function(event){
        div = document.createElement("div");
        div.innerHTML = "Type: " + event.type + " - Target: " + JSON.stringify(event.target) + " - Time" + event.time + "<br> <hr>";
        showdiv.appendChild(div);
      });
    }
  });
}
