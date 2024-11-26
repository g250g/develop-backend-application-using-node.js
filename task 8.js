
const students = [
    { name: "KIRABO", age: 20, grade: 85 },
    { name: "LEA", age: 22, grade: 78 },
    { name: "SANDRA", age: 19, grade: 92 },
    { name: "SIMON", age: 21, grade: 74 },
    { name: "PIMBI", age: 23, grade: 88 }
];

const studentNames = students.map(student => student.name);
console.log("Student Names:", studentNames); 



const topStudents = students.filter(student => student.grade > 80);
console.log("Top Students:", topStudents); 



const averageGrade = students.reduce((sum, student) => sum + student.grade, 0) / students.length;
console.log("Average Grade:", averageGrade); 



const topStudentNames = students
    .filter(student => student.grade > 80)
    .map(student => student.name);
console.log("Top Student Names:", topStudentNames); 



const highestGrade = students.reduce((max, student) => Math.max(max, student.grade), 0);
console.log("Highest Grade:", highestGrade); 

//MUGABO CHRISTIAN
//MUGABO GERARD