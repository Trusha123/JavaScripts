//creating js class using constuctor function(Tradtional way prior to )
function student()
{
    this.rollno = 12;//data members
    this.name = "Trusha";//data members

    //fun properrt
    this.getInfo = function()//member method
    {
        return "Rollno: " + this.rollno + "\tName: " +this.name;
    }
}

//end of class

//creating object of class student(Constructor fun)
let stud1 = new student();
console.log(stud1.getInfo())

let stud2 = new student();
console.log(stud2.getInfo())


