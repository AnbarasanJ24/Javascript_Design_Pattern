// Whenever we need to call a multiple functions, when new data occurs then use observer pattern 

class Observable{
    constructor(){
        this.observers = [];
    }

    subscribe(func){
        this.observers.push(func);
    }

    unsubscribe(func){
        this.observers = this.observers.filter(observer => observer !== func);
    }

    notify(data){
        this.observers.forEach(observer => observer(data));
    }
}

const logging = (data) => {
    console.log("Message is", data)
}

const debugging = (data) => {
    console.log("Message is", data)
}
const observable = new Observable();
observable.subscribe(logging);
observable.subscribe(debugging);
observable.unsubscribe(debugging);

(() => {
    const data = "New Event is occured"
    observable.notify(data);
}
)()