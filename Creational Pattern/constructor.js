
function myHero (name, specialAbility){
    this.name = name;
    this.specialAbility = specialAbility;

    this.getDetails = ()=>{
        console.log("This", this);
        return `This ${this.name} can ${this.specialAbility}`;
    }

    return this;
}



class Hero{
    constructor(name, specialAbility){
        this.name = name;
        this.specialAbility = specialAbility;
    }

    getDetails(){
        return `This ${this.name} can ${this.specialAbility}`;
    }
}

const ironMan = new Hero('IronMan', 'Fly');
const hulk = myHero('Hulk', 'Hit Hard');

console.log(ironMan.getDetails());
console.log(hulk.getDetails());