// Dùng hàm reduce để kiểm tra số lượng phần tử có trong mảng
function countOccurrences(arr) {
  return arr.reduce(function (a, b) {
    a[b] = a[b] + 1 || 1;
    return a;
  }, {});
}
console.log(countOccurrences(['1', '3', '4', '5', '1', '3', '1']));
