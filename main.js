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

//Initiating: Dnd Shenanagains
//Booting Up: Dice Rolls
function roll_d20() {
    Math.ceil(Math.random()*20)
}
function roll_d12() {
    Math.ceil(Math.random()*12)
}
function roll_d10() {
    Math.ceil(Math.random()*10)
}
function roll_d8() {
    Math.ceil(Math.random()*8)
}
function roll_d6() {
    Math.ceil(Math.random()*6)
}
function roll_d4() {
    Math.ceil(Math.random()*4)
}
//Booting Up: Stat Wall
let str = roll_d6+roll_d6+roll_d6
let str_mod = Math.floor((str-10)/2)
let dex = roll_d6+roll_d6+roll_d6
let dex_mod = Math.floor((dex-10)/2)
let con = roll_d6+roll_d6+roll_d6
let con_mod = Math.floor((con-10)/2)
let int = roll_d6+roll_d6+roll_d6
let int_mod = Math.floor((int-10)/2)
let wis = roll_d6+roll_d6+roll_d6
let wis_mod = Math.floor((wis-10)/2)
let cha = roll_d6+roll_d6+roll_d6
let cha_mod = Math.floor((cha-10)/2)
console.log(`By rolling 3d6 six times, these are your stats:
str: ${str} Mod: ${str_mod}
dex: ${dex} Mod: ${dex_mod}
con: ${con} Mod: ${con_mod}
int: ${int} Mod: ${int_mod}
wis: ${wis} Mod: ${wis_mod}
cha: ${cha} Mod: ${cha_mod}
`)
//Shutting down: Stat Wall
//Booting up: Weapon Rolls
function greatsword_swing() {
    console.log(`You swung a greatsword!
        To hit: ${roll_d20+str_mod}
        Damage: ${Math.ceil((Math.random()*6)+(Math.random()*6))+str_mod}
        `)
}
function heavycrossbow_shot() {
    console.log(`You shot a heavy crossbow!
        To hit: ${roll_d20+dex_mod}
        Damage: ${
}