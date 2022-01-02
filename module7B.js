fetch("https://apis.scrimba.com/jsonplaceholder/todos", {
    method: "POST",
    body: JSON.stringify({
        title: "Buy Milk",
        completed: false
    }),
    headers: {
        "Content-Type": "application/json"
    }
})
    .then(res => res.json())
    .then(data => console.log(data))

//

const people = [
    { name: "Jack", hasPet: true },
    { name: "Jill", hasPet: false },
    { name: "Alice", hasPet: true },
    { name: "Bob", hasPet: false },
]

const peopleWithPets = people.filter(person => person.hasPet)
console.log(peopleWithPets)

///

function WhoIsOld (person) {
    if(person.age >= 18){return true}
}

const oldPpl = people.filter(WhoIsOld)
console.log(oldPpl)

/// CALLBACK FUNCTION

const people = [
    { name: "Jack", hasPet: true },
    { name: "Jill", hasPet: false },
    { name: "Alice", hasPet: true },
    { name: "Bob", hasPet: false },
]

function petter (item) {
    return (item.hasPet)
}

function filterArray(array, callback) {
    const resultingArray = []

    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) {resultingArray.push(array[i])}
    }

    return resultingArray
    // Write your filtering logic here
}

console.log (filterArray(people, petter))

//OR YOU CAN JUST PUT THE FUNCTION IN THERE. A function that is called within the running of the OG function

const peopleWithPets = filterArray(people, function(person) {
    return person.hasPet
})

//ERROR HANDLING

fetch("https://api.coingecko.com/api/v3/coins/dogecoin")
    .then(res => {
        if (!res.ok) {
            throw Error("Something went wrong")
        }
        console.log(res.status)
        return res.json()
    })
    .then(data => {
        console.log(data)
    })
    .catch(err => console.error(err))
