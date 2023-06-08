//Hamster
class Hamster{
    constructor(){
        this.owner = owner
        this.hamsterName = hamsterName;
        this.price = price;
    }
    wheelRun(){
        console.log("squeak squeak");
    }
    eatFood(){
        console.log("nibble nibble")
    }
    getPrice(){
        return this.price;
    }
}
const ham = new Hamster(owner="",hamsterName=this.hamsterName,price=15);
class Person{
    constructor(personName,age=0,height=0,weight=0,mood=0,hamsters=[]
        ,bankAccount=0){
        this.personName = personName;
        this.age = age;
        this.height = height;
        this.weight = weight;
        this.mood = mood;
        this.hamsters = hamsters;
        this.bankAccount = bankAccount;
    }
    getName(){
        return this.personName;
    }
    getAge(){
        return this.age;
    }
    getWeight(){
        return this.weight;
    }
    greet(){
        console.log(this.personName);
    }
    eat(){
        weight++;
        mood++;
    }
    exercise(){
        weight--;
    }
    ageUp(){
        age++;
        height++;
        weight++;
        mood--;
        bankAccount+=10;
    }
    buyHamster(){
        this.hamsters.push(ham.hamsterName);//?
        this.mood += 10;
        this.bankAcocunt = this.bankAccount-ham.getPrice();
    }
}

//Create a story with your Person class
//new Person instance 'Timmy'
const timmy = new Person();
timmy.personName = "Timmy";
timmy.age += 5;
timmy.eat = 5;
timmy.exercise = 5;
timmy.age += 9;
timmy.buyHamster();
ham.hamsterName = "Gus"
timmy.age += 15;
timmy.eat += 2;
timmy.exercise += 2;
console.log(timmy);
console.log(ham)

//Chef Make Dinner
class Dinner{
    constructor(){
        this.appetizer = appetizer;
        this.entree = entree;
        this.dessert = dessert;
    }
}
class Chef{
    constructor(){
    }
    cook(dish1,dish2,dish3){
        const newDinner = new Dinner(dish1,dish2,dish3);
        console.log(`The new dinner is ${newDinner}`);
    }
}
cook.newDinner("spring roll","steak","cake");