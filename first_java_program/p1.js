var arr = [9, 9, -5, 9, 5];
var N = 5;
var K = 3;
var min = 10000;

for (var i = 0; i < arr.length; i++) {
  var sum = 0;
  for (var j = 0; j < K + i; i++) {
    sum = sum + arr[j];
  }
  if (min > sum) {
    min = sum;
  }
}
console.log(min);
