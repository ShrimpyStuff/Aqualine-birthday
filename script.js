  var time = new Date();
  var day = time.getDate();
  var month = time.getMonth();

if (day ==  21 && month == 8) {
    document.getElementById("H").innerHTML = "<h1>Happy Birthday αqualine!</h1>"
  } else
  {
    document.getElementById("H").innerHTML = "<h1>It's not αqualine's birthday</h1>"
  }
