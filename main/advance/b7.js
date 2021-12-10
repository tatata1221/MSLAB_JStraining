// 7. Viết hàm deep clone 1 object
function cloneObject(obj) {
  var clone = {};
  for (var i in obj) {
    //sd de quy neu nhu ben trong object co chua object con => se lay dc het cac props(deep)
    if (typeof obj[i] == 'object' && obj[i] != null)
      clone[i] = cloneObject(obj[i]);
    //kp la obj nua thi gan gia tri vao obj clone
    else clone[i] = obj[i];
  }
  return clone;
}
//example
let e = {
  animals: {
    fruits: ['cat', 'dog'],
    vfx: null,
    dx: {
      fan: 'txt',
      add: 'sh',
    },
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
p = cloneObject(e);
e.auto = ['car'];
e.cash.Dolar.coin = [12, 13, 15, 16, 17];
e.animals.dx.fan = 'changed';
console.log('copy', p);
console.log(e);
