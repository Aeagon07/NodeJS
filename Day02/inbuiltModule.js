import os from 'node:os'

console.log('CPU', os.cpus()); // gives you array of object. Array of CPU Core
console.log('CPU Count', os.cpus().length); // gives you CPU Count

console.log('Total Meomery', os.totalmem() / (1024 * 1024)); // In MB
console.log('Total Meomery', os.totalmem() / (1024 * 1024 * 1024)); // In GB
console.log('Free Meomery', os.freemem() / (1024 * 1024)); // MB
console.log('Uptime', os.uptime()/(60 * 60)); // give you in Hour
console.log('Hostname', os.hostname());

console.log('User Info', os.userInfo()); // gives you object of user

console.log('Machine', os.machine()); // machine info or cpu architecture


// You can make the real world monitoring application using this