//Hamster
class Hamster{
    constructor(owner,name,price){
        this.owner = owner;
        this.name = name;
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
class Person{
    constructor(name,age,height,weight,mood,hamsters,bankAmount){
        this.name = name;
        this.age = age;
        this.height = height;
        this.weight = weight;
        this.mood = mood;
        this.hamsters = hamsters;
        this.bankAmount = bankAmount;
    }
    getName(){
        return this.name;
    }
    getAge(){
        return this.age;
    }
    getWeight(){
        return this.weight;
    }
    greet(){
        console.log(this.name);
    }
    eat(num){
        weight++;
        mood++;
    }
    exercise(n){
        weight--;
        return n;
    }
    ageUp(){
        age++;
        height++;
        weight++;
        mood--;
        bankAccount+=10;
    }
    buyHamster(){
        hamsters.push(Hamster.name);
        mood += 10;
        bankAcocunt = bankAccount-getPrice();
    }
    // eat(num){
    //     return num;
    // }
}

//Create a story with your Person class
const peep = new Person("Timmy",5,60)
peep.exercise = 5;
// console.log(peep.exercise)
console.log(peep.age)
//hamster named Gus, cost $15, owner is Timmy:
const ham = new Hamster("Timmy","Gus",15)
console.log(ham)
console.log(ham.price);
//Have Timmy eat twice
console.log(`Timmy ate ${peep.eat(2)} times`);
//Have Timmy exercise twice
console.log(`Timmy exercised ${peep.exercise(2)}`);

//Chef Make Dinner
class Dinner{
    constructor(str,appetizer,entree,dessert){
        this.str = str;
        this.appetizer = appetizer;
        this.entree = entree;
        this.dessert = dessert;
    }
}
class Chef{
    constructor(ingrdient1,ingredient2,ingredient3){
        // if(ingredient1 === "apple" &&)

    }
    salad(){
        console.log(`salad`);
    }
    fries(){
        console.log(`fries`);
    }
    mixBowl(){
        console.log(`mixBowl`)
    }
}