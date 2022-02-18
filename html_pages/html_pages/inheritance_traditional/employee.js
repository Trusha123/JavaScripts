//parent class

function employee(empId,name,salary)
{
    this.empId=empId;
    this.name=name;
    this.salary=salary;
}

//defining object method using prototypal prperty
employee.prototype.show = function()
{
    console.log("EmpId: " + this.empId)
    console.log("Name: " + this.name)
    console.log("Salary: " + this.salary)
}


let e1 = new employee(3101,"sunita",34000.00);
console.log("Employee Info:")
e1.show();


//child class
function Manager(empId,name,salary,incentives)
{
    this.incentives=incentives;
    //calling parent class cinstructor

    employee.call(this,empId,name,salary);

}


//build 'IS-A' relationship(IMP)
Manager.prototype=Object.create(employee.prototype)
Manager.prototype.constructor = employee;

//special methods of child class
Manager.prototype.getIncentives = function(){

    return this.incentives;
}

//creating child class (subclass) object
let m1 = new Manager(2901,"TrushaP",23000.00,5000.00)
console.log("Manage info ")
m1.show();//calling inherited method

console.log("Incentives :"+m1.getIncentives());//calling special method
