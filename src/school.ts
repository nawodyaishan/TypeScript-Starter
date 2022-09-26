class School {
    public teachersList: [string];
    public studentsList: [string];

    public assignments: [string, string];

    public constructor(assignments: [string, string]) {
        this.assignments = assignments;
    }

    public addTeachers(teacher: string) {
        this.teachersList.push(teacher);
    }

    public addStudents(student: string) {
        this.studentsList.push(student);
    }

    public addAssignments(student: string, teacher: string) {
        this.assignments.push(teacher, student);
    }
}