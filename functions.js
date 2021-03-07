"use strict";
function getSum(num1, num2) {
    return num1 + num2;
}
;
function getName(firstName, lastName) {
    return firstName + " " + lastName;
}
;
let mySum = function getSum(num1, num2) {
    if (typeof num1 === 'string') {
        num1 = parseInt(num1);
    }
    if (typeof num2 === 'string') {
        num2 = parseInt(num1);
    }
    return num1 + num2;
};
getSum(1, 2);
mySum(1, '2');
getName('John', 'Doe');
