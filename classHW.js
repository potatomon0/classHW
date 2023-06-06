//cteating classes
class Cat{
    //food, toy, character are three constructor properties
    constructor(food,toy,character){ 
        this.food = food;
        this.toy = toy;
        this.character = character;
    }
    //age(), color(), size() are methods of the class Cat
    age(){
        const yearBorn = 5;
        return yearBorn;
    }
    color(){
        return "Coat color is brown";
    }
    size(){
        return "Size is med-large";
    }
}

//cat1 and cat2 are instances of the class Cat
const cat1 = new Cat("churu","wand","annoying");

//instance cat1 is logged to see its properties for: food, toy, character
console.log(cat1);
//instance cat1 is invoking method age() of class Cat
console.log(cat1.age());
console.log(cat1.color());
console.log(cat1.size());
const cat2 = new Cat("egg","mousie","dumbo");
console.log(cat2);
console.log(cat2.age());
console.log(cat2.color());
console.log(cat2.size());

//Constructors
class Pirate{
    constructor(gender,age,goldTooth){
        this.gender = gender;
        this.age = age;
        this.goldTooth = goldTooth;
    }
    bath(){
        return false;
    }
    ate(){
        return true;
    }
    married(){
        return false;
    }
}
//instantiated an array
let jollyRoger=[new Pirate("f",30,false),
    new Pirate("???",65,false),
    new Pirate("m",20,true)];
let blackPearl = [new Pirate("f",52,true),
    new Pirate("m",75,true),
    new Pirate("m",1,false)];
//simple display of array with its value:
console.log(jollyRoger,blackPearl)
//to loop through the arrays:
jollyRoger.forEach((num)=>{console.log(num)})
