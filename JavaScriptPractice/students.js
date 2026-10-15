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
