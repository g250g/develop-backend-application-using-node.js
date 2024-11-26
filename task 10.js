
const student = {
    name: "MUGABO",
    age: 20,
    grade: "A",
    subjects: ["PHP", "BACK-END", "ALGOLITHM"]
};


const { name, age, grade, subjects } = student;
console.log(`Name: ${name}, Age: ${age}, Grade: ${grade}`);

const [firstSubject, secondSubject] = subjects;
console.log(`First Subject: ${firstSubject}, Second Subject: ${secondSubject}`);


const numbers = [10, 20, 30, 40, 50];


const [first, second, ...rest] = numbers;
console.log(`First: ${first}, Second: ${second}, Rest: ${rest}`);



const [, , third] = numbers;
console.log(`Third: ${third}`);



const [x, y, z = 0] = [1, 2];
console.log(`x: ${x}, y: ${y}, z: ${z}`);
//MUGABO CHRISTIAN
//MUGABO GERARD
