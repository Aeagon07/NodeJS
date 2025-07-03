/* when you writ the multiple callback in the code then they are not easily readable it is 
difficult to understand so there is concept called promises that prevent our code from the 
Callback Hell ... */

import * as fs from 'node:fs/promises'

async function createFile(pathname){
    // How error will handle -> try cath
    try{
        await fs.writeFile(pathname, 'Hello NodeJs! \n')
        await fs.appendFile(pathname, 'Hello JS')
    }catch(err){
        console.log(err.message)
    }

    /* Without using the promise we write like code we see it gets corrupted in the previous 
    version the appendFile code must be in the callback but here no condition */
    
    /* Means -> The use of async-await is for you can write code syncronously but it works 
    asyncronously that's the beauty of the async-await.. */

    // The asyncronously execution while writing in sync. because the main thread is not blocked the, 
    /* the main reason to define the asyncro. and syncro. code is, in syncro the main thread 
    is blocked after a line execution but in asyncro it will never happen.. */

    console.log('Creating the File Using the Promises!!');
}

// createFile('./promiseFile.txt');


async function createFolder(foldername){
    await fs.mkdir(foldername, {recursive: true});
    // The recursive true is for creating folder inside the folder 
}

async function writeToFile(pathname, content = ''){
    await fs.appendFile(pathname, content);
}

async function file(pathname, content = ''){
    await fs.writeFile(pathname, content);
}

async function readFile(pathname) {
    const data = await fs.readFile(pathname, 'utf-8');
    console.log('data', data);
}

async function deleteFolder(folderpath) {
    await fs.rm(folderpath, {recursive: true});
}

async function deleteFile(filepath){
    await fs.unlink(filepath);
}

async function getFileInfo(params) {
    const stats = await fs.stat(params);
    // custome report
    return {
        size: `${(stats.size / 1024).toFixed(2)} KB`,
        created: `${(stats.birthtime.toLocaleString())}`,
        modified: `${stats.mtime.toLocaleString()}`
    };
    // console.log('stats: ', stats);
}

// Uncover the promise
getFileInfo('.promiseFile.txt').then((data) => {
    console.log('data', data);
});


createFolder('./NODEJS/Day05')
