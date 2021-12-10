// 2. Tạo 1 mảng init gồm 10 phẩn tử ngẫu nhiên lấy từ hàm random
function randomNum(start, end) {
  return Math.floor(Math.random() * (end - start + 1) + start);
}
let array = [];
while (array.length < 10) {
  array.push(random(1, 100));
}
console.log(array);
