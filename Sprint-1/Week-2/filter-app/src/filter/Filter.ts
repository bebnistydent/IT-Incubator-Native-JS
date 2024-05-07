import React from "react";
import './App.css';


const code = [4,8,15,16,23,42];




export const Filter = () => {

  
  


const result  = [23,42]

type coursesType = {
  title: string
  price: number
}


const courses = [
  {title: "CSS", price: 200},
  {title: "JavaScript", price: 140},
  {title: "Redux", price: 99.99}
];

const filterCource = (filter: coursesType ) => {
  return filter.price < 100;
}

const cheapCourse = courses.filter(filterCource);


};