

class Employee {
    constructor(name) {
        this.name = name;
    }

    workDailyTask() {
        console.log(this.name, ' Able to work on daily task');
    }
}

const anbu = new Employee('Anbu');
const ram = new Employee('Ram');


Employee.prototype.manageteam = () => console.log("Able to Manage Team");
anbu.workDailyTask();
anbu.manageteam()
ram.workDailyTask();

class SuperEmployee extends Employee{
    constructor(name){
        super(name);
    }
    handleMultipleProjects(){
        console.log(this.name, "Able to handle multiple projects");
    }
}
const john = new SuperEmployee('John');
john.workDailyTask()
john.handleMultipleProjects();
console.log(john.name)


const doe = Object.create(john);
doe.handleMultipleProjects();