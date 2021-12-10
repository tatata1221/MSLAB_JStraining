// 5. Viết hàm tìm kiếm những bạn có điểm trung bình >= 8
function searchStudentByAvgMark(obj) {
  return Object.keys(obj).filter(function (key) {
    return obj[key] > 8;
  });
}
console.log(searchStudentByAvgMark(v));
