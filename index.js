const Traceroute = require('nodejs-traceroute');
const dns = require('dns');

try {
    const tracer = new Traceroute();
    tracer
        .on('pid', (pid) => {
            console.log(`pid: ${pid}`);
        })
        .on('destination', (destination) => {
            console.log(`destination: ${destination}`);
        })
        .on('hop', (hop) => {
            console.log(`hop: ${JSON.stringify(hop)}`);
        })
        .on('close', (code) => {
            console.log(`close: code ${code}`);
        });
 
    tracer.trace('172.104.100.169');
} catch (ex) {
    console.log(ex);
}