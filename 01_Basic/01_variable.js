const accountNumber = 12489
let mobileNumber = 9158873806
var customerName = "Yash"

console.log(accountNumber);
console.log(mobileNumber);
console.log(customerName);

console.log("---------------------");
console.log();
console.log("After reassign the value");



// accountNumber = 6695 // it gives error as const variable value cannot reassign
mobileNumber = 452896656
customerName = "abc"

console.log(accountNumber);
console.log(mobileNumber);
console.log(customerName);
console.log("---------------------");
console.log();
console.log("After using table ");

// to print the all  value in single line we use table

console.table([accountNumber, mobileNumber, customerName])

