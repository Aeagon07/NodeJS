// Jab bhi we use the common Js module syntax then we use 
// const greeting = require('./module')
// Common Js Module system

// ESM
// 1) Default
// import greeting from "./module.js"; // when you use the default then you can use any name like i use the greeting

// 2) export
import { greet } from "./module.js";

// Ham wahi previous greeting app ko module mein kaise likh te hai wo dekh rahe hai 
const name = process.argv[2];

const hour = new Date().getHours();


const greeting = greet(hour);

console.log(`${greeting}, ${name}`);