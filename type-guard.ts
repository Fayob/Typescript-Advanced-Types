type Admins = {
    name: string
    games: string[]
}

type Employees = {
    name: string
    date:  Date
}

type ElevatedEmployees = Admins & Employees

const con: ElevatedEmployees = {
    name: "Manu",
    games: ["Jump-Boy"],
    date: new Date()
}

type Str = string | number
type Num = number | boolean

type join = Str & Num

function plus(a: Str, b:Num){
    // "typeof" can be used as type guard to check 
    if (typeof a === "string" || typeof b === "string"){
        return a.toString() + b.toString()
    } else if (typeof a === "boolean" || typeof b === "boolean") {
        return
    }
    return a + b 
}

type UnknownEmployee = Employees | Admins

function printEmployeeInfo(emp: UnknownEmployee){
    console.log("Name: " + emp.name);
    // "for in" can be used as type guard to check if a property exist or not in an object
    if ("games" in emp ){
        console.log("games: " + emp.games);
    }
    if ("date" in emp){
        console.log("Date: " + emp.date);
    }
}

printEmployeeInfo(con)
printEmployeeInfo({name: "Max", date:new Date})
// printEmployeeInfo({name: "Max", games: ["jumpimg-Jax"]})

class Car {
    drive(){
        console.log("Driving Car...");
    }
}

class Truck {
    drive(){
        console.log("Driving a truck...")   
    }

    loadCargo(amount: number){
        console.log("Loading Cargo... " + amount);
    }
}

type Vehicle = Car | Truck

const v1 = new Car()
const v2 = new Truck()

function drive(vehicle: Vehicle){
    vehicle.drive()
    // "instanceof" can be used as well in type guard to check if property exist or not and it cannot be used with interfaces
    if (vehicle instanceof Truck){
        vehicle.loadCargo(1000);
    }
}

drive(v1)
drive(v2)