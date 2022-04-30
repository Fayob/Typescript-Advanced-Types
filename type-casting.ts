const paragraph = document.querySelector("p")
const inputElement = <HTMLInputElement>document.getElementById("num1")
const input_Element = document.getElementById("num2")! as HTMLInputElement

inputElement.value = "1234"
input_Element.value = "5678"

// you can use conditional statement if you're not sure about the element in dom, if you're pretty sure then you can use type casting !
if (paragraph){
    paragraph.addEventListener("click", ()=>{
        console.log("Clicked");
    })
}