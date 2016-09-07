
function findWaldo(arr, found) {
  var findIndex = 0
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == "Waldo") {
      findIndex = i
      found(findIndex);   // execute callback
    }
  }
}

function actionWhenFound(index) {
  console.log(`Found Waldo at index ${index}!`);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);

