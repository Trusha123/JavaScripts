//define ES6 super class
class Employee{
    constructor(empId,name,salary)
    {
        this.empId=empId;
        this.name=name;
        this.salary=salary;
    }

    show()
    {
        console.log("EmpId: " + this.empId + "\tName: " +this.name + "\tSalary: " + this.salary )
    }

}

//define subclass
class Manager extends Employee{
    constructor (empId,name,salary,incentives){
        super(empId,name,salary);
        this.incentives=incentives;
    }

    getIncentives()
    {
        return this.incentives;
    }

    //method overriding
    show()
    {
        //super.show();
        console.log("Manager show")
        super.show();
    }
}

//creating superclas object
let e1 =new Employee(1001,"Trusha patel",23000.00);
e1.show();

//creating sub class object
let m1 = new Manager(302,"Geeta Patel",45000.00,3000.00);
m1.show();
console.log("Incentives: " + m1.getIncentives())


class MarketingManager extends Manager{
    show()
    {console.log("Marketing manager");

    }
}

let mm1 = new MarketingManager();
mm1.show()
