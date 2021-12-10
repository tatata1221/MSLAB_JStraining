// 3. Tạo 1 mảng markList gồm khoảng 5-10 bạn sinh viên
function generateStudentMark(name) {
  const studentList = {
    name: name,
    mark: {
      literature: getRandomMark((start = 6), (end = 10), (step = 0.5)),
      maths: getRandomMark((start = 6), (end = 10), (step = 0.5)),
      chemistry: getRandomMark((start = 6), (end = 10), (step = 0.5)),
      history: getRandomMark((start = 6), (end = 10), (step = 0.5)),
      biology: getRandomMark((start = 6), (end = 10), (step = 0.5)),
    },
  };
  function getRandomMark(start, end, step) {
    function randomNum(start, end) {
      return Math.floor(Math.random() * (end - start + 1) + start);
    }
    return start + randomNum(0, Math.floor((end - start) / step)) * step;
  }
  return studentList;
}
//console.log(generateStudentMark('Nguyen Van A'));
let markList = [];
while (markList.length < 10) {
  markList.push(generateStudentMark('Nguyen Van A'));
}
console.log(markList);
