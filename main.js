/**
 * 2.4 - Custom Functions
 * ICS3 - Mr. Brash 🐿️
 * 
 * Read README.md and YOUR_Task.md 
 * 
 * This is a playground. Feel free to play.
 **/ 


// Example custom function using Number() and prompt()
function circle_area() {

    let radius = Number(prompt("What is the radius of the circle?"));

    console.log(`The area is: ${Math.PI * radius**2}`);

}

/*****  Your code goes below  *****/

let to_fahrenheit = Number(prompt("Provide temperature in celsius"))
console.log(`${to_fahrenheit} degrees celsius is ${Math.round((to_fahrenheit*9/5)+32)} degrees fahrenheit.`)
let to_celsius = Number(prompt("Provide temperature in fahrenheit"))
console.log(`${to_celsius} degrees fahrenheit is ${Math.round((to_celsius-32)*5/9)} degrees celsius`)
let roll_d10 = console.log(`You rolled a(n):${(Math.ceil(Math.random()*10))}, neat!`)
let roll_d6 = console.log(`You rolled a(n): ${(Math.ceil(Math.random()*6))}, neat!`)