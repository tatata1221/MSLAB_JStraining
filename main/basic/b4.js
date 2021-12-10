// 4. Viết hàm double với đầu vào là mảng array, trả về kết quả là mảng mới gồm các phần tử là gấp đôi phần tử của mảng array
let arr = [1, 2, 3, 4, 5];
function doubleNum(array) {
  return array.map(function (value) {
    return value * 2;
  });
}
console.log(doubleNum(arr));
