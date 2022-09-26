import {Teacher} from "./teacher";
import {Student} from "./student";
import {School} from "./school";

console.log("________________");

const teacher1: Teacher = new Teacher("T1", 31);
const teacher2: Teacher = new Teacher("T2", 32);
const teacher3: Teacher = new Teacher("T3", 33);

const student1: Student = new Student("S1", 21);
const student2: Student = new Student("S1", 21);
const student3: Student = new Student("S1", 21);

const MySchool: School = new School();

MySchool.addTeachers(teacher1.toString())
MySchool.addTeachers(teacher2.toString())
MySchool.addTeachers(teacher3.toString())




