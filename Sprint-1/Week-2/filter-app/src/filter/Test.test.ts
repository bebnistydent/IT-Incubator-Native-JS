import React from "react";





test('Must safe the fucking world', () => {
  const code = [4,8,15,16,23,42];

   const predicate  = (data: number) => data > 17; // This is short form of arrow function like that


  const result = code.filter(predicate);

  expect(result.length).toBe(2);
  expect(result[0]).toBe(23);
  expect(result[1]).toBe(42);
})



test('Get only complited tasks', () => {
  const tasks = [
  {id: 1, title: 'Milk', isDone: false},
  {id: 2, title: 'bread', isDone: false},
  {id: 3, title: 'bananas', isDone: true},
  {id: 4, title: 'potato', isDone: true},
]

const complitedTask = tasks.filter(task => task.isDone);


expect(complitedTask.length).toBe(2)
expect(complitedTask[2].id).toBe(3);
expect(complitedTask[3].id).toBe(4);
})