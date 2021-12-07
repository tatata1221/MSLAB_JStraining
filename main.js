//______________________BASIC______________________//

//Bai 1:
// function random(start, end){
//     //method math.random() sẽ trả về 1 số ngẫu nhiên
//     //method math.floor() sẽ làm tròn(xuống) thành số nguyên 
//         return Math.floor(Math.random() * (end - start + 1) + start);
// }
// //example tạo ra 1 số ngẫu nhiên trong [1;4]
// var a = random(1,4);
// console.log(a);
// -----------------------------------------------------------------------

//Bai 2:
// function random(start, end){
//         return Math.floor(Math.random() * (end - start + 1) + start);
// }
// var array = [];
// while(array.length < 10){
//     array.push(random(1, 100));
// }
// console.log(array);
// -----------------------------------------------------------------------

//Bai 3:
// var arr = [1, 2, 3, 4, 5];
// //SD method array.filter để tạo ra mảng con t/m với ĐK cho trước
// function getOddNumbers(array){ 
//         return array.filter(function(value){
// 	        return value % 2 == 1;
//         });
// }     	
// console.log(getOddNumbers(arr));
// -----------------------------------------------------------------------

//Bai 4:
// var arr = [1, 2, 3, 4, 5];
// function doubleNum(array) {
//         return array.map(function(value){
//                 return value * 2;
// 	});
// }		
// console.log(doubleNum(arr));
// -----------------------------------------------------------------------

//Bai 5:
// function countOccurrences(arr) {
//         return arr.reduce(function(a, b){
//                 a[b] = a[b] + 1 || 1
//                 return a;
//         }, {});
// }
// console.log(countOccurrences(['1', '3', '4', '5', '1','3', '1']));

//______________________ADVANCE______________________//

//Bai 1:
// function getRandomMark(start, end, step){
//     function random(start, end){
//             return Math.floor(Math.random()*(end - start +1) + start);
//         }
//         return start + random(0, Math.floor((end - start) / step)) * step;
// }
// console.log(getRandomMark(6, 10, 0.5));
// -----------------------------------------------------------------------

//Bai 2:
// function generateStudentMark(name){
//         const studentList = {
//                 Name: name,
//                 Mark:{
//                         literature: getRandomMark(start = 6, end = 10, step = 0.5),
//                         maths: getRandomMark(start = 6, end = 10, step = 0.5),
//                         chemistry: getRandomMark(start = 6, end = 10, step = 0.5),
//                         history: getRandomMark(start = 6, end = 10, step = 0.5),
//                         biology: getRandomMark(start = 6, end = 10, step = 0.5)
//                 }
//         }
//         function getRandomMark(start, end, step){
//                 function random(start, end){
//                         return Math.floor(Math.random() * (end - start + 1) + start);
//                 }
//                 return start + random(0, Math.floor((end - start) / step)) * step;
//         }
//         return student; 
// }
// console.log(generateStudentMark("Nguyen Van A"));
// -----------------------------------------------------------------------

//Bai 3:
// function generateStudentMark(name){
//         const studentList = {
//                 Name: name,
//                 Mark:{
//                         literature: getRandomMark(start = 6, end = 10, step = 0.5),
//                         maths: getRandomMark(start = 6, end = 10, step = 0.5),
//                         chemistry: getRandomMark(start = 6, end = 10, step = 0.5),
//                         history: getRandomMark(start = 6, end = 10, step = 0.5),
//                         biology: getRandomMark(start = 6, end = 10, step = 0.5)
//                 }
//         }
//         function getRandomMark(start, end, step){
//                 function random(start, end){
//                         return Math.floor(Math.random() * (end - start + 1) + start);
//                 }
//                 return start + random(0, Math.floor((end - start) / step)) * step;
//         }
//         return student; 
// }
// console.log(generateStudentMark("Nguyen Van A"));
// var markList = [];
// while(markList.length < 10){
//     markList.unshift(generateStudentMark("Nguyen Van A"))
// }
// console.log(markList);
// -----------------------------------------------------------------------

//Bai 4: {Nguyen Van A : 8.5}
// function generateStudentMark(name){
//         const studentList = {
//                 Name: name,
//                 Mark:{
//                         literature: getRandomMark(start = 6, end = 10, step = 0.5),
//                         maths: getRandomMark(start = 6, end = 10, step = 0.5),
//                         chemistry: getRandomMark(start = 6, end = 10, step = 0.5),
//                         history: getRandomMark(start = 6, end = 10, step = 0.5),
//                         biology: getRandomMark(start = 6, end = 10, step = 0.5)
//                 }
//         }
//         function getRandomMark(start, end, step){
//                 function random(start, end){
//                         return Math.floor(Math.random() * (end - start + 1) + start);
//                 }
//                 return start + random(0, Math.floor((end - start) / step)) * step;
//         }
//         return studentList; 
// }
// console.log(generateStudentMark("Nguyen Van A"));
// function avgMark1(obj){
//         let sum = 0;
//         let data = obj?.Mark;
//         let size = Object.keys(data).length;
//         Object.keys(data).map(function(key, index) {
//                 if(key == "literature"){
//                         sum = data[key] * 2;
//                 }else if(key == "maths"){
//                         sum = sum + data[key] * 2;
//                 }else{
//                 sum += data[key];
//                 }
//                 //  console.log(key, index,data[key],size); 
//               });
//               return Math.round((sum / (size + 2))*100) / 100;
// }
// console.log(avgMark1(generateStudentMark("Nguyen Van A")));
// var markList = [];
// while(markList.length < 5){
//     markList.push(generateStudentMark("Nguyen Van A"));
//     markList.push(generateStudentMark("Nguyen Van B"));
//     markList.push(generateStudentMark("Nguyen Van C"));
//     markList.push(generateStudentMark("Nguyen Van D"));
//     markList.push(generateStudentMark("Nguyen Van E"));
// }
// console.log(markList);
// function avgMark2(array) {
//         const data = {};
//         array.forEach(element => {
//                 x = avgMark1(element);
//                 data[element.Name] = x;
//         });
//         return data;
// }
// v = avgMark2(markList);
// console.log(v);
//--------------
//Bai 5:
// function searchStudentByAvgMark(obj){
//         return Object.keys(obj).filter(function(key){
//               return obj[key] > 8;  
//         });
      
//         }
// console.log(searchStudentByAvgMark(v));
//-------------
//B6:
// function bonusMoney(obj){
//         let data = obj?.Mark;
//         let sum = 0;
//         Object.keys(data).map(function(key){
//                 if(data[key] >=8 && data[key] < 9){
//                         sum +=100000;
//                 }else if(data[key] >=9 && data[key] < 10){
//                         sum+=200000;
//                 }else if(data[key] = 10){
//                         sum+=500000;
//                 }
//         });
//         return sum;
// }
// q = generateStudentMark("Nguyen Van A");
// console.log(q);
// console.log(bonusMoney(q));
//------------
//B7:
// const nestedObject = {
//         country: 'VN',
//         detail: {
//           city: 'HCM'
//         }
//       };
// function deepClone(obj1){
//  const obj2 = JSON.parse(JSON.stringify(obj1));
//  return obj2;
// }
// console.log(deepClone(nestedObject));
//--------------------
//B8:
//kiểm tra 1 giá trị là object
// function isObject(obj) {
//         return obj != null && typeof obj === "object";
// }     
// //Hàm so sánh sâu
// function isDeepEqual(obj1, obj2) {
//         const keys1 = Object.keys(obj1); 
//         const keys2 = Object.keys(obj2); 
//         if (keys1.length !== keys2.length) {
//                 return false;
//         }
//         for (const key of keys1) {
//                 const val1 = obj1[key];
//                 const val2 = obj2[key];
//                 // kiểm tra xem hai giá trị có cùng là object hay không
//                 const areObjects = isObject(val1) && isObject(val2);
//                 // nếu cùng là object thì phải gọi đệ quy để so sánh 2 object
//                 if (areObjects && !isDeepEqual(val1, val2)) {
//                         return false;
//                 }     
//                 // nếu không cùng là object thì so sánh giá trị
//                 if (!areObjects && val1 !== val2) {
//                         return false;
//                 }
//         }      
//         return true;
// }     
// let pnt1 = { number: 1, index: 2, title: { type: "vac" } };
// let pnt2 = { number: 1, index: 2, title: { type: "vac" } };      
// console.log(isDeepEqual(pnt1, pnt2));
