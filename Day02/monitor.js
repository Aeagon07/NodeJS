// Monitoring System

// FUnctinality => cpu core info, ram info

// Note => If you want a function recursly or again an again then use the setInterval method
import os from 'node:os'


function monitor(){
    console.log('Monitoring...')
    // Take a snapshot

    // Take another snapshot after a second

    const oldCpus = os.cpus();


    setTimeout(()=>{
        const newCpu = os.cpus();

        const usage = newCpu.map((cpu, i) => {
            return{
                core: i,
                usage: calculateCPU(oldCpus[i], newCpu[i]) + '%',
            };
        });

        setTimeout(() => {
            console.clear()
        }, 1000)

        console.table(usage)

        const useMem = ((os.totalmem() - os.freemem()) / (1024 * 1024 * 1024)).toFixed(2);
        const totalMem = (os.totalmem() / (1024 * 1024 * 1024)).toFixed(2);
        console.log(`${useMem}GB / ${totalMem}GB`);

    }, 1000)
}

function calculateCPU(oldCpu, newCpu){
    const oldTotal = Object.values(oldCpu.times).reduce((a, b) => a + b);
    const newTotal = Object.values(newCpu.times).reduce((a, b) => a + b);

    const idle = newCpu.times.idle - oldCpu.times.idle

    const total = newTotal - oldTotal;
    
    const used = total - idle;
    return ((used * 100)/ total).toFixed(1);
// toFixed() for avoiding the decimal points
}
setInterval(monitor, 1000);