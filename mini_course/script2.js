let cat = {
    name: "Fluffy",
    age: 4,
    eyeColor: "Blue",
    food: {
        favourite: "Tuna ",
        lestFavorite: "Oranges"
    }
}

function meow(){
console.log("Meow")
console.log("Cat age is: " + cat.name)
}

document.querySelector("button").addEventListener("click",meow())