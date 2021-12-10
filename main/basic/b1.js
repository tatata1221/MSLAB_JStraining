// 1. Viết hàm random(start, end) trả về kết quả là 1 số nguyên trong khoảng start-end
function randomNum(start, end) {
  return Math.floor(Math.random() * (end - start + 1) + start);
}
//example tạo ra 1 số ngẫu nhiên trong [1;4]
let a = random(1, 4);
console.log(a);
