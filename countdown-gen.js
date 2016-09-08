var countdownGenerator = function (x) {
  var list = [];

  for(var i = x; i > 0; i--){
    list.push("T-minus" + i);
  }

  list.push("Blast Off!");
  list.push("Rockets already gone, bub!");

  var counter = -1
  return function (){
    if (counter <= x) {
      counter += 1
      return console.log(list[counter]);
    } else {
      return console.log(list[counter]);
    }
  }
};

var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!*/
