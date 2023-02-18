/*
Make a code that can do the following things:
- Ask the user his name;
- Ask the user his weight in kilos;
- Ask the user his height in meters;
- Define a variable caled bmi (Body mass index) where you can calculate
using (weight/(height^2))
- At the end show the user's name, his BMI and his situation according the 
following table:

    BMI < 18.5 = Underweight
    18.5 < BMI < 25.0 = Normal
    25.0 < BMI < 29.9 = Overweight
    30.0 < BMI < 39.9 = Obesity 
    BMI > 40.0 = Severe Obesity

*/

const prompt = require('prompt-sync')()
let name = prompt("Enter your name: ")
let weight = parseFloat(prompt("Enter your weight(kg): "))
let height = parseFloat(prompt("Enter your height(m): "))
let bmi = weight/(height**2)
console.log('Your BMI is: ',bmi)

if (bmi<18.5){
    console.log('And your situation is: Underweight')
}else if (bmi>18.5 && bmi<=25.0){
    console.log('And your situation is: Normal')
}else if (bmi>25 && bmi<=30){
    console.log('And your situation is: Overweight')
}else if (bmi>30 && bmi<=40){
    console.log('And your situation is: Obesity')
}else{
    console.log('And your situation is: Severe Obesity')
} 