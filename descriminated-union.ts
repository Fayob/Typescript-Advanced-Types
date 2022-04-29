interface Bird {
    kind: "bird"
    flyingSpeed: number
}
interface Horse {
    kind: "horse"
    runningSpeed: number
}

 type Animal = Bird | Horse

//  function moveAnimal (ani: Animal){
//     if ("flyingSpeed" in ani){
//         console.log("The flying speed is: " + ani.flyingSpeed)
//     }
//  }
 function moveAnimal (animal: Animal){
    let speed;
    switch (animal.kind){
        case "bird":
            speed = animal.flyingSpeed
            break
        case "horse":
            speed = animal.runningSpeed
            break
    }
    console.log("The Moving Speed is: " + speed);
    
 }

 moveAnimal({kind:"horse", runningSpeed: 10})
 

//  const rec: Animal = {
//      runningSpeed: 1000,
//      flyingSpeed: 2000
//  }

//  moveAnimal(rec)