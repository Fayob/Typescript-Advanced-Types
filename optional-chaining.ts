const fetchedUserData = {
    id: "a1",
    name: "Fayob",
    job: {title: "CEO", description: "My Own Company" }
}

// console.log(fetchedUserData.job.title);

// optional Chaining
console.log(fetchedUserData?.job?.description);
