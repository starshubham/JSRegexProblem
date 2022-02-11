//object
var empArr=new Array();

empArr.push({
    emphr:0,
    empwage:20,
    toString(){
        return "\nEmphr=> "+this.emphr+" empWage=> "+this.empwage;
    },
})


empArr.push({
    emphr:4,
    empwage:40,
    toString(){
        return "\nEmphr=> "+this.emphr+" empWage=> "+this.empwage;
    },
})
console.log(empArr.toString())

//===============================================================================================================
//=,==,===

var a=160;
var b="160";

console.log("using == : ",a==b)
console.log("using === : ",a===b)
console.log("using = : ",a=b) 

console.log()
//undefined

var name

console.log("Undefined ex: "+name)
console.log()


//=========================================================================================================
console.log("Class Example")

//class

class Student{
    _id; 
    _name;
    _phno;
    #priavteVariable="private varaibe"; //_variable visual identifiacation for golbal variable and variable to identify local variable


    get Address(){
        return this._address
    }

    set Address(address){
        this._address=address
    }

    constructor(id,name,phno,Address){
        this._id=id
        this._name=name
        this._phno=phno
        this.Address=Address
    }

    // constructor(id,...spreadOperator){
    //     console.log(`Id: ${id} \nName: ${spreadOperator[0]} \nPhNo: ${spreadOperator[1]} \nAddress: ${spreadOperator[2]}`)
    // }

    static staticMethod(){
        console.log("Static method")
    }

    GetName() {
        console.log("Get name calling")
    }
}

var s=new Student(1,"Rajesha","6565965656","india")

console.log("\nprivate variable example\n")
console.log(s.priavteVariable);

console.log(`\nid=>  ${s.id} \nname=> ${s.name} \naddess=> ${s.address} \nphno=> ${s.phno}`)
console.log();
Student.staticMethod()
s.GetName()


//npm install prompt-sync
const prompt=require("prompt-sync")();  // For Taking input from user

var name = prompt("Enter your name: ");
console.log("Your name is " + name);