console.log('Learn')

setTimeout(() => {
    console.log('Build');
}, 0)

console.log('Success');

/* Output => Learn 
             Success
             Build 

why this happen because of, In Javascript there is some sync an some are async

Syncronous Code -> The code which executed line after line or line by line 

Asyncronous Code -> The code which executing in the background means setTimeout setInterval 
promises for these thing we have concept called event loop which runs in the background
             
*/