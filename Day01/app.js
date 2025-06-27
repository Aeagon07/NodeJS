// console.log('Hello World of, Node.js!');
// console.log(process.argv);
// gives you first two paths of node and the app.js file
// basically the .argv provides us the argument in the array

/* Run like node app.js arg1 arg2 => 
[
  'C:\\Program Files\\nodejs\\node.exe',
  'C:\\Devlopment\\Web Devlopment\\NodeJS\\app.js',
  'arg1',
  'arg2'
]
   You can access the arguments using process.argv[2], process.argv[3], etc.  
*/

// Lets Create the Simple Dynamic Greeting App
const name = process.argv[2];

const hour = new Date().getHours(); // 24 hours format

function greet(hour){
    if (hour <= 4 && hour >= 18) return "Good Night";
    if(hour < 12) return "Good Morning";
    if(hour => 12 && hour < 17) return "Good Afternoon";
    return "Good Evening";
}

const greeting = greet(hour);
 
// Good Morning, Rushikesh
console.log(`${greeting}, ${name}!`);
