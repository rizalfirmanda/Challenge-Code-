// Expected Result : 6
// Direction : Get the total of "1" in binary value of number input
const number = 221;

function result(num) {
  const bin = num.toString(2)
  const array = Array.from(bin)

  return array.filter(a => a === '1').length
}

console.log(result(number));