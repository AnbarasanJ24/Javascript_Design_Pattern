let counter = 0;
let instance;

class Counter{
    constructor(){
        if(instance){
            return instance;
        }
        instance = this;
    }
    getInstance(){
        return this;
    }

    increment(){
        counter++;
    }

    decrement(){
        counter--;
    }

    getCounter(){
        return counter;
    }
}

const counter1 = new Counter();
const counter2 = new Counter();

const SingeltonCounter = Object.freeze(new Counter());
export default SingeltonCounter;