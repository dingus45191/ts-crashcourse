
interface UserInterface {
    name: string;
    email: string;
    age: number;
    register()
    payInvoice()
}

class User implements UserInterface {
     name: string;
    email: string;
     age: number;

    constructor(name: string, email: string, age: number) {
        this.name = name;
        this.email = email;
        this.age = age;

        console.log("User created " + this.name);
    }
    register(){
        console.log("Welcome "+this.name)
    }

    payInvoice(){
        console.log(this.name+ ' paid $100')
    }
     
}
class Member extends User{
    id: number;

    constructor(id: number, name: string, email:string, age: number) {
      super(name, email, age);
      this.id = id;
    }
    payInvoice(){
  super.payInvoice();
    }
}

// let john = new User('John Doe', 'john@doe.com',16);

// console.log(john.age)
// john.register()

let mike:User= new Member(1,'Mike Smith','mike@mike.com',18)
mike.payInvoice()