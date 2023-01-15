const person = {
    name : 'Anbarasan',
    age : 26,
    designation : 'SDE-II'
}

const anbuProxy = new Proxy(person, {
    get: (obj, prop)=>{
        if(!obj[prop]){
            console.log(`${prop} doesn't exits in the Object`)
        }else{
            console.log(`Using Proxy- The key is ${prop} and value is ${obj[prop]}`)
        }
    },
    set : (obj, prop, value)=>{
        if(prop === 'age' && typeof prop != 'number'){
            console.log(`Cannot set ${value} for the ${prop} of type ${typeof prop}`);
        }else{
            obj[prop] = value;
        }
    }
})

const anbuReflectProxy = new Proxy(person, {
    get : (obj, prop)=>{
        console.log(`Value for ${prop} is ${Reflect.get(obj, prop)}`)
    },
    set : (obj, prop, value)=>{
        if(prop === 'age' && typeof prop != 'number'){
            console.log(`Cannot set ${value} for the ${prop} of type ${typeof prop}`);
        }else{
           Reflect.set(obj, prop, value)
        }
    }
})


anbuProxy.address;
anbuProxy.name = 'Ram';
anbuProxy.name;

anbuProxy.age= '27'