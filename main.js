//______________________BASIC______________________//

//Bai 1:
// function randomNum(start, end){
//     //method math.random() sẽ trả về 1 số ngẫu nhiên
//     //method math.floor() sẽ làm tròn(xuống) thành số nguyên 
//         return Math.floor(Math.random() * (end - start + 1) + start);
// }
// //example tạo ra 1 số ngẫu nhiên trong [1;4]
// var a = random(1,4);
// console.log(a);
// -----------------------------------------------------------------------

//Bai 2:
// function randomNum(start, end){
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
//     function randomNum(start, end){
//             return Math.floor(Math.random()*(end - start +1) + start);
//         }
//         return start + randomNum(0, Math.floor((end - start) / step)) * step;
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
//                 function randomNum(start, end){
//                         return Math.floor(Math.random() * (end - start + 1) + start);
//                 }
//                 return start + randomNum(0, Math.floor((end - start) / step)) * step;
//         }
//         return studentList; 
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
//                 function randomNum(start, end){
//                         return Math.floor(Math.random() * (end - start + 1) + start);
//                 }
//                 return start + randomNum(0, Math.floor((end - start) / step)) * step;
//         }
//         return studentList; 
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
//                 function randomNum(start, end){
//                         return Math.floor(Math.random() * (end - start + 1) + start);
//                 }
//                 return start + randomNum(0, Math.floor((end - start) / step)) * step;
//         }
//         return studentList; 
// }
// console.log(generateStudentMark("Nguyen Van A"));
// function avgMark1(obj){
//         let sumAvg = 0;
//         let dataMark = obj?.Mark;
//         let sizeObj = Object.keys(dataMark).length;
//         Object.keys(dataMark).map(function(key, index) {
//                 if(key == "literature"){
//                         sumAvg = dataMark[key] * 2;
//                 }else if(key == "maths"){
//                         sumAvg = sumAvg + dataMark[key] * 2;
//                 }else{
//                 sum += dataMark[key];
//                 }
//                 //  console.log(key, index,dataMark[key],size); 
//               });
//               return Math.round((sumAvg / (sizeObj + 2))*100) / 100;
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
//         const dataAvgMark = {};
//         array.forEach(element => {
//                 x = avgMark1(element);
//                 dataAvgMark[element.Name] = x;
//         });
//         return dataAvgMark;
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
//         let dataMark = obj?.Mark;
//         let sumBnMy = 0;
//         Object.keys(dataMark).map(function(key){
//                 if(dataMark[key] >=8 && dataMark[key] < 9){
//                         sumBnMy +=100000;
//                 }else if(dataMark[key] >=9 && dataMark[key] < 10){
//                         sumBnMy+=200000;
//                 }else if(dataMark[key] = 10){
//                         sumBnMy+=500000;
//                 }
//         });
//         return sumBnMy;
// }
// q = generateStudentMark("Nguyen Van A");
// console.log(q);
// console.log(bonusMoney(q));
//------------
//B7:
// const o = new Object();
// console.log(o);
// console.log(o.toString()); // returns [object Object]
// function getType(obj) {
//   const str = Object.prototype.toString.call(obj); //xac dinh obj class -> function.prototype.call() lay kieu duoi dang chuoi [o O]
//   const map = {
//     '[object Boolean]': 'boolean',
//     '[object Number]': 'number',
//     '[object String]': 'string',
//     '[object Array]': 'array',
//     '[object Undefined]': 'undefined',
//     '[object Null]': 'null',
//     '[object Object]': 'object'
//   };
//   //check xem obj thuoc kieu nao
//   if (obj instanceof Element) {
//     return 'element';
//   }
//   return map[str]; //-> tra ve kieu du lieu mong muon
// }

// //TH la object
// function copyObject(origin, type, copy = {}) {
//   for (const [key, value] of Object.entries(origin)) { //Object.entries tra ve mang cac props duoi dang [key,value]
//     copy[key] = deepCopy(value);
//   }
//   return copy;
// }

// function deepCopy(origin) {
//   const type = getType(origin);
//   let copy;
//   if(type == 'object')
//       return copyObject(origin, type, copy);
//     else
//       return origin;
// }
// //example
// let e = {
//   animals:{
//     fruits:["cat", "dog"],
//     vfx: null,
//     dx: {
//       fan: "txt",
//       add: "sh"
//     },
//   },
//   cash:{
//     "Dolar": {
//       coin:[40, 50, 20],
//       paper:[300, 500]
//     },
//     "VND": {
//       type:["I", "VII", "IX"],
//       hundreds:[300, 500]
//     },
//   },
//   auto:["BMW", "R8"]
// };
// g = deepCopy(e);
// e.auto = ['car'];
// e.cash.Dolar.coin = [12,13,15,16,17];
// e.animals.dx.fan = "changed";
// console.log('origin', e);
// console.log(g);
// console.log(isDeepEqual(e, g)); // => false
//--------------------
//B8:deep equal: nếu nội dung 2 object y hệt nhau thì nó sẽ bằng nhau(so sánh nhiều cấp hay toàn bộ props của obj)
//Kiểm tra 1 giá trị có là object hay k
// function isObject(obj) {
//     return obj != null && typeof obj === "object";
// } 
// //Hàm so sánh sâu
// function isDeepEqual(obj1, obj2) {
//     const keys1 = Object.keys(obj1); // trả về mảng các thuộc tính của obj1,2
//     const keys2 = Object.keys(obj2); 
//     // so sánh số lượng props nếu ko đủ -> return flase
//     if (keys1.length !== keys2.length) {
//         return false;
//     }
//     //duyệt qua từng phần tử trong mảng keys1
//     for (const key of keys1) {
//         const val1 = obj1[key];
//         const val2 = obj2[key];
//         // kiểm tra xem hai giá trị có cùng là object hay không
//         const areObjects = isObject(val1) && isObject(val2);
//         // nếu cùng là object thì phải gọi đệ quy để so sánh 2 object 
//         // sd đệ quy để có thể lặp hết vào trong các thuộc tính của object =>
//         if (areObjects && !isDeepEqual(val1, val2)) {
//             return false;
//         }
//         // nếu không phải là object(có thể là array...) thì so sánh value
//         if (!areObjects && val1 !== val2) {
//             return false;
//         }
//     } 
//     return true;
// }
// //simple example
// let pnt1 = { number: 1, index: 2, title: { type: "vac" } };
// let pnt2 = { number: 1, index: 2, title: { type: "vac" } }; 
// let pnt3 = { number: 1, index: 4, title: { type: "vac" } };      
// console.log(isDeepEqual(pnt1, pnt2)); // ==>true
// console.log(isDeepEqual(pnt2, pnt3)); // ==>false
// //not simple example
// let a = {
//     animals:{
//       fruits:["cat", "dog"]
//     },
//     cash:{
//       "Dolar": {
//         coin:[40, 50, 20],
//         paper:[300, 500]
//       },
//       "VND": {
//         type:["I", "VII", "IX"],
//         hundreds:[300, 500]
//       },
//     },
//     auto:["BMW", "R8"]
//   };
//   let b = {
//     animals:{
//       fruits:["cat", "dog"]
//     },
//     cash:{
//       "Dolar": {
//         coin:[40, 50, 20],
//         paper:[300, 500]
//       },
//       "VND": {
//         type:["I", "VII", "IX"],
//         hundreds:[300, 500]
//       },
//     },
//     auto:["BMW", "R8"]
//   };
//   let c = {
//     animals:{
//       fruits:["cat", "dog"]
//     },
//     cash:{
//       "Dolar": {
//         coin:[40, 50, 20],
//         paper:[300, 500]
//       },
//       "VND": {
//         type:["I", "VII", "XX"],     //khac nhau (a: type:["I", "VII", "IX"])
//         hundreds:[300, 500]
//       },
//     },
//     auto:["BMW", "R8"]
//   };
//   console.log(isDeepEqual(a, b)); // ==> true
//   console.log(isDeepEqual(a, c)) // ==> false  
