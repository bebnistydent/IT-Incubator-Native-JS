
import React from "react";
import ReactDOM from 'react-dom';


const user = {
  name: 'John',
  address: {
      city: 'New York',
      country: 'USA'
  }
};

const updatedUser = {
  ...user,
  address: {
      ...user.address,
      city: 'Mogilev'
  }
}
// Ожидаемый вывод: { name: 'John', address: { city: 'Toronto', country: 'USA' }
// }


export const Tasks = () => {
  console.log(updatedUser)
 return (
    <div>
      <div>Name: {updatedUser.name}</div>
      <div>Country: {updatedUser.address.country}</div>
      <div>City: {updatedUser.address.city}</div>
      </div>  
)
}