"use strict";
class User {
    constructor(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
        console.log("User created " + this.name);
    }
    register() {
        console.log("Welcome " + this.name);
    }
    payInvoice() {
        console.log(this.name + ' paid $100');
    }
}
class Member extends User {
    constructor(id, name, email, age) {
        super(name, email, age);
        this.id = id;
    }
    payInvoice() {
        super.payInvoice();
    }
}
// let john = new User('John Doe', 'john@doe.com',16);
// console.log(john.age)
// john.register()
let mike = new Member(1, 'Mike Smith', 'mike@mike.com', 18);
mike.payInvoice();
