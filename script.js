  var time = new Date.toLocaleString("en-US", {timeZone: "America/New_York"});
  var day = time.getDate();
  var month = time.getMonth();

if (day ==  21 && month == 8) {
    document.getElementById("H").innerHTML = "<h1>Happy birthday αqualine!</h1>"
    document.title = "Happy birthday!";
  } else
  {
    document.getElementById("H").innerHTML = "<h1>It's not αqualine's birthday</h1>"
    document.title = "αqualine's birthday website";
  }
