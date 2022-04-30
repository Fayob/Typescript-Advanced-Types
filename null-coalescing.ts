// const userInput = null
// const userInput = undefined
const userInput = ""

const storedData = userInput || "Default"
// The || sign regards an empty string, undefined and null as falsy while ?? (Null Coalescing) sign regards only undefined and null as falsy but it treats an empty string as truthy
const stored_Data = userInput ?? "Default"

console.log(storedData);
console.log(stored_Data);
