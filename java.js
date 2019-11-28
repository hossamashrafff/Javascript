function Event(target, time, type){
  this.target = target;
  this.time = time;
  this.type = type;
  this.toString = function()
  {
    return "target: "  + this.target + " - time: " + this.time + " - type: " + this.type;
  }
}
  window.addEventListener("load", function(e)
  {
    ee = new Event(e.target, e.timeStamp, e.type);
    localStorage.setItem('load', ee.toString());
  });

  window.addEventListener("unload", function(e)
  {
    ee = new Event(e.target, e.timeStamp, e.type);
    localStorage.setItem('unload', ee.toString());
  });

function randomNumber(min, max)
{
    return Math.floor(Math.random() * (max - min)) + min;
}
generate = document.getElementById("id1");
generate.addEventListener("click", function(e)
{
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
      chrbutton.addEventListener("click", function()
	  {
        for(i = 0; i<imagelist.getElementsByTagName("img").length; i++)
		{
          imagelist.getElementsByTagName("img")[i].setAttribute("style", "display:none");
        }
        img.setAttribute("style", "display:block");
      });
      document.getElementById("id2").appendChild(buttonlist);
      document.getElementById("id2").appendChild(imagelist);
    }
    ee = new Event(e.target, e.timeStamp, e.type);
    localStorage.setItem('click', ee.toString());
});
