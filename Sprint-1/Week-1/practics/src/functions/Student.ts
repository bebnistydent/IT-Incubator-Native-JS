


export type StudentType = { 
    id: number
    name: string
    age: number
    isActive: boolean
    address: adressType
    technologies: Array<technologiesType>
}


export type technologiesType = {
id: number
title: string
}

export type citytype = {
    title: string
    countryTitle: string
}



export type adressType = {
    streetTitle: string
    city: citytype
 
}
