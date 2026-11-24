const totalStudents = 13;
const minimumStudents = 10;
const minimumTeachers = 1;
let studentsPresent = 8;
let teachersPresent = 0;
let canStartClass = studentsPresent >= minimumStudents;

console.log(`Can Start class: ${canStartClass}`);

studentsPresent = 10;
canStartClass = studentsPresent >= minimumStudents;
console.log(`Can Start class: ${canStartClass}`);

canStartClass = (studentsPresent >= minimumStudents) && (teachersPresent >= minimumTeachers)|| (studentsPresent >= minimumStudents && teachersPresent >= minimumTeachers);
;

canStartClass = ((studentsPresent >= minimumStudents) && (teachersPresent >= minimumTeachers));

const class07Students = [];

function addStudentToClass(studentName) {
    if (studentName === "") {
        return;
    }

    if (class07Students.includes(studentName)) {
        console.log(`Student ${studentName} is already in the class`);
        return;
    }

    if (studentName === "The Queen") {
        class07Students.push(studentName);
        return;
    }

    if (class07Students.length >= 6) {
        console.log("Cannot add more students to class 07");
        return;
    }

    class07Students.push(studentName);
}

function getNumberOfStudents() {
    return class07Students.length;
}

// Add students
addStudentToClass("Benjamin");
addStudentToClass("Maria");
addStudentToClass("Oliver");
addStudentToClass("Emma");
addStudentToClass("Sofia");
addStudentToClass("Lucas");

// Try adding a seventh student
addStudentToClass("Noah");

// Try adding the same student again
addStudentToClass("Benjamin");

// Add the Queen, even though the class is full
addStudentToClass("The Queen");

// Log the number of students
console.log(getNumberOfStudents());
