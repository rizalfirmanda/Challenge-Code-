// Expected Result = 55
// Direction : Return sum of array
const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function result(input) {
  const sum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].reduce((partial_sum, a) => partial_sum + a, 0);
  console.log(sum);
}
console.log(result(input));