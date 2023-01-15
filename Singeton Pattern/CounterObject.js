// https://codesandbox.io/s/singleton-3-forked-h39j9t?file=/src/counter.js
let count;

let counter = {
    increment(){
        count++;
    },
    decrement(){
        count--;
    },

    getCounter(){
        return counter;
    }
}

Object.freeze(counter);

export {counter};

// While Import 
// import {counter} from './counter'