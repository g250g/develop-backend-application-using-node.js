
const students = [
    { name: "christian", age: 20, grade: 85 },
    { name: "manzi", age: 22, grade: 78 },
    { name: "alex", age: 19, grade: 92 },
    { name: "kevin", age: 21, grade: 74 },
    { name: "gerard", age: 23, grade: 88 }
];

function getTopStudents(students, threshold) {
    return students
        .filter(student => student.grade > threshold) 
        .map(student => student.name);              
}

console.log(getTopStudents(students, 80)); 
console.log(getTopStudents(students, 90)); 
console.log(getTopStudents(students, 95));

//mugabo christian
//mugabo gerard
