// 1. Viết hàm getRandomMark trả về điểm random từ start đến end, bước nhảy step
function getRandomMark(start, end, step) {
  function randomNum(start, end) {
    return Math.floor(Math.random() * (end - start + 1) + start);
  }
  return start + randomNum(0, Math.floor((end - start) / step)) * step;
}
console.log(getRandomMark(6, 10, 0.5));
