// FS => File System Module 

// import fs from 'node:fs'
//  OR
import { error } from 'node:console';
import * as fs from 'node:fs'
// fs is alias here

function createFile(pathname){
    fs.writeFileSync(pathname, 'Hello NodeJS! \n');
    // fs.writeFileSync(pathname, 'Hello Javascript');
    /* It cannot create new file or cannot add text in the existing file but it just override 
    through currently created file */

    // if you want to add our text in the existing file without overiding it then,
    fs.appendFileSync(pathname, 'Hello Javascript')

    console.log(`File has Created`)
}

// createFile('./newFile.txt');

// but above method of creating file is asyncronous so we avoid to use in our code...

/* In fs module works behind the scene but for behind the scene work 
os provide us the some notification system by the primitives of the 
OS but OS not support the async nature of the fs module */

/* That's why node js start a new thread behind the scene in fs 
 operations. All the operation on fs done on the new thread so we 
 call the node js is single threaded which is not absoultly true 
 there are some operations in the node js that node js use multi 
 threads in behind the scene work....*/ 

 // Async Code
// Error First Callback -> error is the first callback call in the node js 
 function creFile(pathname){
    fs.writeFile(pathname, "Hello Async NodeJS! \n", (err) => {
        // If you read file then add data next to err cause here we don't written anything
        if(err){
            console.log('Something Went Wrong!!');
            return
        }
        fs.appendFile(pathname, "Hello Javascript", (error) => {
            if(error){
                console.log('Something Went Wrong!!');
                return
            }
            console.log(`File has been created asyncronously`)
        })

        console.log(`File has been created asyncronously`)
        
    });

    console.log(`File Operation Done!`)
    // First without callback wala run hoga then callback ke andar ka run hoga
 }

 creFile('./newFile.txt')