function getSum(num1:number, num2 :number) {
    return num1 + num2
};
function getName(firstName:string, lastName:string) {
    return  firstName + " " + lastName
};


let mySum= function getSum(num1:any, num2 :any) {
    if(typeof num1 ==='string'){
        num1 = parseInt(num1)
    }
    if(typeof num2 ==='string'){
        num2 = parseInt(num1)
    }
    return num1 + num2
};
getSum(1,2)

mySum(1,'2')

getName('John','Doe')
