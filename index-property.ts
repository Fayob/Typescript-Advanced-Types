interface ErrorContainer {
    // id: string // any other properties declared here must be have a value of string because of the index property used underneath ([prop: string]: string), if not it'll result to an error
    [prop: string]: string
}

const errorBag: ErrorContainer = {
    email: "Enter a valid email",
    username: "Must start with letter"
}