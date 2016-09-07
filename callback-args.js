
function findWaldo(arr, found) {
  var findIndex = 0

  arr.forEach(function(elem,index) {
    if (elem == "Waldo") {
      findIndex = index
      found(findIndex);
    }
  });
}

function actionWhenFound(index) {
  console.log(`Found Waldo at index ${index}!`);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);

