class Person {
  constructor(public name: string, public age: number) {}
}

class User extends Person{
    constructor(name: string, age: number, private userId: String){
        super(name, age);
    }
}

export const exsample_02 = () => {
  const person1 = new Person("taichi", 24);
  console.log(person1);

  const user1 = new User("inoue", 23, "kanojo");
  console.log(user1);
};
