// business logic

var change = function(number, base) {
  var numArray = number.split('').reverse();
  var total = 0;
  var temp = 0;

  for (var index = 0; index < numArray.length; index++) {
    if (numArray[index].toLowerCase() ==="a") {
      temp = 10;
    }
    else if (numArray[index].toLowerCase() ==="b") {
      temp = 11;
    }
    else if (numArray[index].toLowerCase() ==="c") {
      temp = 12;
    }
    else if (numArray[index].toLowerCase() ==="d") {
      temp = 13;
    }
    else if (numArray[index].toLowerCase() ==="e") {
      temp = 14;
    }
    else if (numArray[index].toLowerCase() ==="f") {
      temp = 15;
    }
    else {
      temp = parseInt(numArray[index]);
    }
    total += (temp * Math.pow(base, index));
  }

  return total;
}

// user interface logic
$(document).ready(function(){
  $("#input").submit(function(event) {
    event.preventDefault();
    var number = $("#number").val();
    var base = parseInt($("#base").val());

    var decimal = change(number, base);

    $(".decimal").text(decimal);

    $("#result").show();
  });
});
