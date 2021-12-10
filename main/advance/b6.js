// 6. Với mỗi điểm 8, 9, 10 lần lượt được thưởng 1000000, 2000000, 5000000. Tính số tiền thưởng của từng bạn
function bonusMoney(obj) {
  let dataMark = obj?.mark;
  let sumBnMy = 0;
  Object.keys(dataMark).map(function (key) {
    if (dataMark[key] >= 8 && dataMark[key] < 9) {
      sumBnMy += 100000;
    } else if (dataMark[key] >= 9 && dataMark[key] < 10) {
      sumBnMy += 200000;
    } else if ((dataMark[key] = 10)) {
      sumBnMy += 500000;
    }
  });
  return sumBnMy;
}
q = generateStudentMark('Nguyen Van A');
console.log(q);
console.log(bonusMoney(q));
