//Hamster
class Hamster{
    constructor(owner,name,price){
        this.owner = "";
        this.name = name;
        this.price = 15;
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
        this.age = 0;
        this.height = 0;
        this.weight = 0;
        this.mood = 0;
        this.hamsters = [];
        this.bankAccount = 0;
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
        hamsters.push(Hamster.name);
        mood += 10;
        bankAcocunt = bankAccount-getPrice();
    }
}


