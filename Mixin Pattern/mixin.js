class Dog {
    constructor(name){
        this.name = name;
    }
}
const animalFunctionality = {
    walk: () => console.log("Walking!"),
    sleep: () => console.log("Sleeping!")
  };

  
let DogFunctionality = {
    bark : () => console.log("Barking"),
    play : () => console.log("Playing"),
    walk (){
        super.walk();
    }
}
Object.assign(DogFunctionality, animalFunctionality);
Object.assign(Dog.prototype, DogFunctionality);

let tim = new Dog('tim');
tim.bark();
tim.play();
tim.walk();