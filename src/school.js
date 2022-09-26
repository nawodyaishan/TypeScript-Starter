"use strict";
exports.__esModule = true;
exports.School = void 0;
var School = /** @class */ (function () {
    function School() {
        // this.studentsList = sList;
        // this.teachersList = tList;
    }
    School.prototype.addTeachers = function (teacher) {
        console.log(teacher);
        // this.teachersList.push(teacher);
    };
    School.prototype.addStudents = function (student) {
        this.studentsList.push(student);
    };
    School.prototype.addAssignments = function (student, teacher) {
        this.assignments.push(teacher, student);
    };
    return School;
}());
exports.School = School;
