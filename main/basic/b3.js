// 3. Viết hàm getOddNumbers với đầu vào là mảng array, trả về kết quả là mảng con gồm các số lẻ trong mảng array
let arr = [1, 2, 3, 4, 5];
//SD method array.filter để tạo ra mảng con t/m với ĐK cho trước
function getOddNumbers(array) {
  return array.filter(function (value) {
    return value % 2 == 1;
  });
}
console.log(getOddNumbers(arr));
