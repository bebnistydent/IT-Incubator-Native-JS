const originalArray = [1, 2, 3, 4, 5];

const addElementToArray = () => {
  
let newArray = [...originalArray.push(6)];
console.log(newArray);
  
}

addElementToArray();