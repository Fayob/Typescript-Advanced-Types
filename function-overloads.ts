type Joined = string | number
type Numb = number | boolean

function universals(a: string, b:string): string
function universals(a: number, b:number): number
function universals(a: number, b:string): string
function universals(a: string, b:number): string
function universals(a: Joined, b:Joined){
    if (typeof a === "string" || typeof b === "string"){
        return a.toString() + b.toString()
    }
    return a + b
}

const string = universals("Max", "Manu")
string.split(" ")
const number = universals(2, 4)
const string1 = universals(2, "Max")
const string2 = universals("Manu", 2)