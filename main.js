//______________________BASIC______________________//


//Bai 1:
// function random(start, end){
//     //method math.random() sẽ trả về 1 số ngẫu nhiên
//     //method math.floor() sẽ làm tròn(xuống) thành số nguyên 
//                 return Math.floor(Math.random()* (end - start + 1) + start);
//             }
//     //example tạo ra 1 số ngẫu nhiên trong [1;4]
//             var a = random(1,4);
//             console.log(a);
// -----------------------------------------------------------------------

//Bai 2:
// function random(start, end){
//                 return Math.floor(Math.random()* (end - start + 1) + start);
//             }
// var array = [];
// while(array.length < 10){
//     array.push(random(1,100));
// }
// console.log(array);
// -----------------------------------------------------------------------

//Bai 3:
// var arr = [1, 2, 3, 4, 5];
// //SD method array.filter để tạo ra mảng con t/m với ĐK cho trước
// 		function getOddNumbers(array){ 
//                  return  array.filter(function(value){
// 			if (value % 2 == 1){
// 			return true;
// 			}
// 			return false;
// 		});
//         }	
//         console.log(getOddNumbers(arr));
// -----------------------------------------------------------------------

//Bai 4:
        // var arr = [1, 2, 3, 4, 5];
	// 	function double(array) {
        //         return array.map(function(value){
	// 		return value * 2;
	// 	});
        // }		
	// 	console.log(double(arr));
// -----------------------------------------------------------------------

//Bai 5:
        // function countOccurrences(arr) {
        //   return arr.reduce(function(a, b){
        //     a[b] = a[b] + 1 || 1
        //     return a;
        //   }, {});
        // }
        // console.log(countOccurrences(['1', '3', '4', '5', '1','3', '1']));

//______________________ADVANCE______________________//

//Bai 1:
// function getRandomMark(start, end, step){
//     function random(start, end){
//      return Math.floor(Math.random()*(end - start +1) + start);
//     }
//     return start + random(0, Math.floor((end-start)/step)) * step;
//     }
//     console.log(getRandomMark(6,10,0.5));
// -----------------------------------------------------------------------

//Bai 2:
// function generateStudentMark(name){
//     var student = {
//    Name: name,
//    Mark:{
//         literature: getRandomMark(6,10,0.5),
//         maths: getRandomMark(6,10,0.5),
//         chemistry: getRandomMark(6,10,0.5),
//         history: getRandomMark(6,10,0.5),
//         biology: getRandomMark(6,10,0.5),
//    }
// }
//    function getRandomMark(start, end, step){
//         function random(start, end){
//         return Math.floor(Math.random()*(end - start + 1) + start);
//         }
//         return start + random(0, Math.floor((end-start)/step)) * step;
//     }
//     return student; 
// }
//  console.log(generateStudentMark("Nguyen Van A"));
// -----------------------------------------------------------------------

//Bai 3:
//  function generateStudentMark(name){
//         var student = {
//        Name: name,
//        Mark:{
//         literature: getRandomMark(6,10,0.5),
//         maths: getRandomMark(6,10,0.5),
//         chemistry: getRandomMark(6,10,0.5),
//         history: getRandomMark(6,10,0.5),
//         biology: getRandomMark(6,10,0.5),
//        }
//     }
//        function getRandomMark(start, end, step){
//             function random(start, end){
//             return Math.floor(Math.random()*(end - start + 1) + start);
//             }
//             return start + random(0, Math.floor((end-start)/step)) * step;
//         }
//         return student;
//     }

// var markList = [];
// while(markList.length < 10){
//     markList.unshift(generateStudentMark("Nguyen Van A"))
// }
// console.log(markList);
// -----------------------------------------------------------------------

//Bai 4:
function generateStudentMark(name){
               var student = {
               Name: name,
               Mark:{
                literature: getRandomMark(6,10,0.5),
                maths: getRandomMark(6,10,0.5),
                chemistry: getRandomMark(6,10,0.5),
                history: getRandomMark(6,10,0.5),
                biology: getRandomMark(6,10,0.5)
               },
            }
               function getRandomMark(start, end, step){
                    function random(start, end){
                    return Math.floor(Math.random()*(end - start + 1) + start);
                    }
                    return start + random(0, Math.floor((end-start)/step)) * step;
                }
                return student;
        }

var markList = [];
while(markList.length < 5){
    markList.unshift(generateStudentMark("Nguyen Van A"))
}
console.log(markList);

// function tinhDiemTB() {
//         var i,diemtb = 0;
//         count = 4;
//         kq = 0;
//         x = (student.Mark.literature + student.Mark.maths) *2;
//         for(i=2; i < 6; i++){
//                 diemtb += student.Mark[i];
//                 count++;
//         }   
//         return (x + diemtb)/count;                        
// }
for(var i in markList){
        for(var x in student)
}