export type ManType = {
  name: string
  age: number 
}

const people: Array<ManType> = [
  {name:"Andrew Ivanov", age: 33},
  {name:"Alexander Petrov", age: 24},
  {name:"Dmitry Sidorov", age: 18}
]

const dimythTransformator = (man: ManType) => {
  return {
    stack : ["css, html", "js", "tdd", "react"],
    firstName: man.name.split(' ')[0],
    LastName: man.name.split(' ')[1]
  }
}

const devs1 = [
  {
        stack : ["css, html", "js", "tdd", "react"],
        firstName: "Andrew", LastName: "Ivanov"
  }, 

  {
        stack : ["css, html", "js", "tdd", "react"],
        firstName: "Alexander", LastName: "Petrov"
    
  },

  {
        stack : ["css, html", "js", "tdd", "react"],
        firstName: "Dmitry", LastName: "Sidorov"
  },
]


const devs2 = [
  dimythTransformator(people[0]),
  dimythTransformator(people[1]),
  dimythTransformator(people[2])
]

const devs3 = people.map(dimythTransformator)