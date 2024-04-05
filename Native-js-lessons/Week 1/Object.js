const names = ['Alex', 'Bob', 'Ivan', 'Sasha'];

const array = [1, 2, 3, 4];
let result = [];

for (let i = array.length; i > 0; i--) {
  const test = array.pop();
  result.push(test);
}

console.log(result);
console.log('array', array);


const str = 'ab-cd-ef';

