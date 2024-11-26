
        

function menu(choice, num1, num2) {
    switch (choice) {
        case "1":
            console.log(`Addition: ${num1} + ${num2} = ${num1 + num2}`);
            break;
        case "2":
            console.log(`Subtraction: ${num1} - ${num2} = ${num1 - num2}`);
            break;
        case "3":
            console.log(`Multiplication: ${num1} * ${num2} = ${num1 * num2}`);
            break;
        default:
            console.log("Invalid choice. Please select 1, 2, or 3.");
    }
}


let choice = "1"; 
let num1 = 10; 
let num2 = 5;  

menu(choice, num1, num2);
//mugabo christian
//mugabo gerard





