"use strict";
exports.__esModule = true;
var teacher_1 = require("./teacher");
var student_1 = require("./student");
var school_1 = require("./school");
console.log('..............');
var student1 = new student_1.Student("S1", 16);
var student2 = new student_1.Student("S2", 14);
var student3 = new student_1.Student("S3", 12);
var teacher1 = new teacher_1.Teacher("T1", 40);
var teacher2 = new teacher_1.Teacher("T2", 50);
var teacher3 = new teacher_1.Teacher("T3", 54);
var MySchool = new school_1.School();
MySchool.addStudent(student1);
MySchool.addStudent(student2);
MySchool.addStudent(student3);
MySchool.addTeacher(teacher1);
MySchool.addTeacher(teacher2);
MySchool.addTeacher(teacher3);
MySchool.addAssignment(teacher1, student3);
MySchool.addAssignment(teacher2, student1);
MySchool.addAssignment(teacher3, student2);
MySchool.printAssignment();
