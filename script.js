// Task 1:
let city = 'Київ'; // declaration and initialization city value
city = 'Львів'; // initialization city value
let address = city; // declaration address value and initialization her city value
alert(address); // displaying the result of the address variable in alert box

// Task 2 (v.1):
let n = 2; // declaration and initialization n value
let result = n ** 3; // declaration and initialization result value
console.log(result); // writes a message the result value of the result variable to the console

// Task 2 (v.2):
// writes a message the result value of the result variable to the console with description
console.log('Зведення до степеня за допомогою арифметичного оператора піднесення до степеня (**), де перший операнд - число, другий операнд - показник ступеня:'); // writes a message to the console
n = 3; // initialization n value
console.log('Число ' + n); // writes a message 'Число п', when n — value of the n variable to the console
let result2 = n ** 3; // declaration result2 value and initialization n value raised to a power 3 using the exponentiation (**) operator
console.log('Число ' + n + ' в 3 степені = ' + result2); // writes a message 'Число п в 3 степені = value of the result2 variable' to the console

// Task 2 (v.3):
// writes a message the result value of the result variable to the console with description
console.log('Зведення до степеня за допомогою статичного методу Math.pow(x,y), де x - число, y - показник ступеня:'); // writes a message to the console
n = 4; // initialization n value
console.log('Число ' + n); // writes a message 'Число п', when n — value of the n variable to the console
let result3 = Math.pow(n, 3); // declaration result3 value and initialization n value raised to a power 3 using the Math.pow() static method
console.log(`Число ${n} в 3 степені = ` + result3); // writes a message 'Число п в 3 степені = value of the result3 variable' to the console

// Task 3:
let pen = 4; // declaration and initialization pen value
let costPen = 5.25; // declaration and initialization costPen value
let pensil = 6; // declaration and initialization pensil value
let costPensil = 3.50; // declaration and initialization costPensil value
let totalCost = pen * costPen + pensil * costPensil; // declaration totalCost value, and initialization of total value calculation
document.write(`Загальна вартість ${pen} ручок ціною ${costPen} і ${pensil} олівців ціною ${costPensil} дорівнює ` + totalCost + `.`); // writes a message result of the calculation in document.write
