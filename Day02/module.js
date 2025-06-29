export function greet(hour){
    if (hour <= 4 && hour >= 18) return "Good Night";
    if(hour < 12) return "Good Morning";
    if(hour => 12 && hour < 17) return "Good Afternoon";
    return "Good Evening";
}

// There are two types of module system

// CommonJS -> Old
// module.exports = greet;

// ESM -> New or Nowdays
// export default
// export

// export default greet; -> you cannot export multiple default

// But using the export direct through the function you can do multiple export in the file => called as Named Export