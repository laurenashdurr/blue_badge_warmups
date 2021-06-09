// For loop challenge

let foods = ["apple", "orange", "rice", "bread", "tofu"]

for (let i = foods.length - 1; i > -1; i--) {
    if (i % 2 == 1){
        let word = foods[i]    
        let titleCasedWord = titleCase(word)

        console.log(`Foods[${i}]:` + titleCasedWord)
    }
}

function titleCase(word){
    
    let first_letter = word[0].toUpperCase()
    let rest = word.slice(1)

    return first_letter + rest
}



// For..of loop challenge 
foods = ["apple", "orange", "rice", "bread", "tofu"]
    // Translates food to their underlying allergy
    let allergies = ["gluten", "soy"]
    
    function foodLengthCheck(food){
        return food.length > 4
    }

for (food of foods) {
    console.log(food, foodLengthCheck(food), foodAllergyCheck(food))
}

function foodAllergyCheck(food){
    allergyMap = {
        bread :"gluten", 
        tofu :"soy"
    }
    if (allergies.includes(allergyMap[food])) {
        return "You can't eat" 
    } else {
    return "You can eat"
    }
}

let cards = [2, 8, "K", 9, 10, 3, 4, "Q", 7, "J", 5, 6, "A"]
let faceCards = []
let numberedCards = []

while (cards.length > 0) {
    let card = cards.pop()
    if (isFaceCard(card)){
        faceCards.push(card)
    } else {
    numberedCards.push(card)
    }
}

console.log(faceCards)
console.log(numberedCards)
console.log(cards)

function isFaceCard(card){
    let result;
    switch(card){
        case "A":
        case "K":
        case "Q":
        case "J":
            result = true
            break
        default: 
            result = false
            break
    }
    return result 
}

// Challenge 4
let animals = [
    "bat", "tiger", "yak", 
    "monkey", "snake", "lizard", 
    "panda", "monkey", "hyena",
]

let zooTrip = {
    seen: [],
    animalSeen: 0
}

animals.forEach((animal) => {
    console.log(`${animal} was seen today at the zoo!`)
    if (!zooTrip.seen.includes(animal)) zooTrip.animalSeen++
    else {console.log(animal, "is a repeat")}
    seenAtTheZoo(animal)
})

console.log(zooTrip)

function seenAtTheZoo(animal){
    zooTrip.seen.push(animal)
}