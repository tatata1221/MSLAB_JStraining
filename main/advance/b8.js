// 8. Viết hàm so sánh 2 deep object bất kì
//Kiểm tra 1 giá trị có là object hay k
function isObject(obj) {
  return obj != null && typeof obj === 'object';
}
//Hàm so sánh sâu
function isDeepEqual(obj1, obj2) {
  const keys1 = Object.keys(obj1); // trả về mảng các thuộc tính của obj1,2
  const keys2 = Object.keys(obj2);
  // so sánh số lượng props nếu ko đủ -> return flase
  if (keys1.length !== keys2.length) {
    return false;
  }
  //duyệt qua từng phần tử trong mảng keys1
  for (const key of keys1) {
    const val1 = obj1[key];
    const val2 = obj2[key];
    // kiểm tra xem hai giá trị có cùng là object hay không
    const areObjects = isObject(val1) && isObject(val2);
    // nếu cùng là object thì phải gọi đệ quy để so sánh 2 object
    // sd đệ quy để có thể lặp hết vào trong các thuộc tính của object =>
    if (areObjects && !isDeepEqual(val1, val2)) {
      return false;
    }
    // nếu không phải là object(có thể là array...) thì so sánh value
    if (!areObjects && val1 !== val2) {
      return false;
    }
  }
  return true;
}
//simple example
let pnt1 = { number: 1, index: 2, title: { type: 'vac' } };
let pnt2 = { number: 1, index: 2, title: { type: 'vac' } };
let pnt3 = { number: 1, index: 4, title: { type: 'vac' } };
console.log(isDeepEqual(pnt1, pnt2)); // ==>true
console.log(isDeepEqual(pnt2, pnt3)); // ==>false
//not simple example
let a = {
  animals: {
    fruits: ['cat', 'dog'],
  },
  cash: {
    Dolar: {
      coin: [40, 50, 20],
      paper: [300, 500],
    },
    VND: {
      type: ['I', 'VII', 'IX'],
      hundreds: [300, 500],
    },
  },
  auto: ['BMW', 'R8'],
};
let b = {
  animals: {
    fruits: ['cat', 'dog'],
  },
  cash: {
    Dolar: {
      coin: [40, 50, 20],
      paper: [300, 500],
    },
    VND: {
      type: ['I', 'VII', 'IX'],
      hundreds: [300, 500],
    },
  },
  auto: ['BMW', 'R8'],
};
let c = {
  animals: {
    fruits: ['cat', 'dog'],
  },
  cash: {
    Dolar: {
      coin: [40, 50, 20],
      paper: [300, 500],
    },
    VND: {
      type: ['I', 'VII', 'XX'], //khac nhau (a: type:["I", "VII", "IX"])
      hundreds: [300, 500],
    },
  },
  auto: ['BMW', 'R8'],
};
console.log(isDeepEqual(a, b)); // ==> true
console.log(isDeepEqual(a, c)); // ==> false
console.log(isDeepEqual(a, b)); // ==> true
console.log(isDeepEqual(a, c)); // ==> false
