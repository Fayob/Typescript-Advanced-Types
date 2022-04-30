type Admin = {
    name: string
    privilege: string[]
}

type Employee = {
    name: string
    startDate: Date
}

type ElevatedEmployee = Admin & Employee

const e1: ElevatedEmployee = {
    name: "Max",
    privilege: ["create-server"],
    startDate: new Date()
}

type Combinables = string | number
type Numeric = number | boolean

type universal = Combinables & Numeric

console.log(e1);

