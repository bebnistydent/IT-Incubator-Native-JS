import { StudentType } from "./Student";


const sum = (a:number, b:number) => {
    return a + b;
}

sum (2,3);

export const addSkill = (student: StudentType, skill: string) => {
        student.technologies.push({
            id: new Date().getTime(),
            title: skill
        })
        
}