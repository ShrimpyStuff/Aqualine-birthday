  var date = new Date();
  var time = date.toLocaleString("en-CA", {timeZone: "America/New_York"});
  var day = date.getDate().toLocaleString("en-CA", {timeZone: "America/New_York"});
  var month = date.getMonth().toLocaleString("en-CA", {timeZone: "America/New_York"});
if (day ==  21 && month == 8) {
    document.getElementById("H").innerHTML = "<h1>Happy birthday αqualine!</h1>"
    document.title = "Happy birthday!";
  } else
  {
    document.getElementById("H").innerHTML = "<h1>It's not αqualine's birthday</h1>"
    document.title = "αqualine's birthday website";
  }
