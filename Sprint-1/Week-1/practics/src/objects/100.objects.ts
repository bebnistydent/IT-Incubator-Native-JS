type MeofType ={
  name: string
  lastName: string
  age: number
  sex: string
  job?: Array<jobArrayType>
  healthCondition: string
  hobbies?: Array<any>
  friends?: Array<any> 
}


type jobArrayType = {
  title: string
  accupation: string
  employeeNumber: number
  rankOfJoy: number
  toxityLevel: string
  
}







const me: MeofType = {
  name: "Nikita",
  lastName: "Yerameey",
  age: 20,
  sex: "Never had",
  job: [
    {
      title: "HobbyGames",
      accupation: "Selling",
      employeeNumber: 20,
      rankOfJoy: 8,
      toxityLevel: "Yana",
    },
  ],
  healthCondition: "About to die",
  hobbies: ["Yoga", "Warcraft", "Crying"],

  friends: [
    { id: 1,
      name: 'Anton',
      age: 32,
      status: "Norm",

    },

    { id: 2,
      name: 'Anton',
      age: 31,
      status: "Norm",
    },

    { id: 3,
      name: "Yasha",
      age: 27,
      status: "Pidor",
      
    },

    {id: 4,
      name:"Roma",
      age: undefined,
      status: "Gay",
      
    },
  
  ],
}

const jsNote = {
  cover: "colorFull",
  material: "paper",
  type: "square",
  quality: "medium",
  additionlaInfo: undefined,
}


const cashMashine = {
  name: "BST-micro-f",
  material: "Plastic",
  support: "KCA",
  size: "small",
  isOn: false,
  isLoaded: true,
  status: "functional",
}

const workingLapTop = {
  model: undefined,
  screen_size: 15.6,
  osy: "windows 10",
  ram: undefined,
  prosessor: undefined,
  is_in_working_condition: false,
}


const local_wench_01 = {
  name: undefined,
  title: "DI 2",
  hight: 170,
  weight: 55,
  status: "fuckable",

  look: [
    { tytle: "HumanType",
      rase: "asian",
      inheritance: "unknown (but probably vietnam)",

    },

    {
      title: "bodyType",
      body: "Feet and sexy",
      hair: {
        color: "blond",
        isColored: true,
      },
      eyes_color: "brown",
       
      

    },

    { title: "cloth",
      chest: "T-short",
      pants: "Black jeens",
      feet: "goth-girl shoes", 
    },
  ],
}

const OneOfMyExGirlfriend = {
  name: "Yana",
  lastName: "Calenskyaya",
  age: undefined,
  hight: 172,
  weight: 60,
  status: "extremely unfuckable",
  adreess: {
    country: "Bulbastan",
    sity: "Mogilev",
    street: "Puskina",
    home: "Calatushina",
    flat: "Do you think i remember?",
  },
  Occupation: undefined,
  Possession: undefined,
  IsWorthedIt: true,
}


const dreamGirlfriend = {
  existence: false,
}




  
  

