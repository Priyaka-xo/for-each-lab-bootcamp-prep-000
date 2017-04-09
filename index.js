
function iterativeLog (array) {
  array.forEach((element, index) => {
    console.log(`${index}: ${element}`)
  })
}


function iterate(callback) {
  var exotics = ["lion", "tiger", "panther"]
  exotics.forEach(callback)
  return exotics
}


 function doToArray(array, callback) {
   array.forEach(callback)
 }
 