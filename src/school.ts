export class School {


    public teachersList: [string];
    public studentsList: [string];

    public assignments: [string, string];

    constructor() {
        // this.studentsList = sList;
        // this.teachersList = tList;
    }


    public addTeachers(teacher: string) {
        console.log(teacher)
        this.teachersList.push(teacher);
    }

    public addStudents(student: string) {
        this.studentsList.push(student);
    }

    public addAssignments(student: string, teacher: string) {
        this.assignments.push(teacher, student);
    }
}