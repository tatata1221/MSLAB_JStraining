// 4. Viết hàm tính điểm trung bình môn với điểm môn văn và toán nhân đôi ( viết hàm chung để có thể xử dụng nếu có nhiều hơn 5 môn kể trên), kết quả trả về là 1 object có key là tên các bạn sinh viên, giá trị là điểm trung bình môn

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
console.log(generateStudentMark('Nguyen Van A'));
function avgMark1(obj) {
  let sumAvg = 0;
  let dataMark = obj?.mark;
  let sizeObj = Object.keys(dataMark).length;
  Object.keys(dataMark).map(function (key, index) {
    if (key == 'literature') {
      sumAvg = dataMark[key] * 2;
    } else if (key == 'maths') {
      sumAvg = sumAvg + dataMark[key] * 2;
    } else {
      sumAvg += dataMark[key];
    }
    //  console.log(key, index,dataMark[key],size);
  });
  return Math.round((sumAvg / (sizeObj + 2)) * 100) / 100;
}
console.log(avgMark1(generateStudentMark('Nguyen Van A')));
let markList = [];
while (markList.length < 5) {
  markList.push(generateStudentMark('Nguyen Van A'));
  markList.push(generateStudentMark('Nguyen Van B'));
  markList.push(generateStudentMark('Nguyen Van C'));
  markList.push(generateStudentMark('Nguyen Van D'));
  markList.push(generateStudentMark('Nguyen Van E'));
}
//console.log(markList);
function avgMark2(array) {
  const dataAvgMark = {};
  array.forEach((element) => {
    x = avgMark1(element);
    dataAvgMark[element.name] = x;
  });
  return dataAvgMark;
}
v = avgMark2(markList);
console.log(v);
