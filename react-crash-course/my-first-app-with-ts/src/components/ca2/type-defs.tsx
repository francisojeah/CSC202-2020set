import { ModeOfEntry } from 'C:/Users/ojeah/Documents/PAU/YEAR 2/2nd Semester/CSC 202 - Computer Programming II/CSC202-2020set/nest-waf-primer/src/student-registration/studentRegistration.types';
export type Student = { 
    id: number,
    department: string;
    matriculationNumber: string;
    modeOfEntry: ModeOfEntry;
     //modeOfEntry: string,
    programOfStudy: string;
    yearOfEntry: number;
}