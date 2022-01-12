const os = require('os')//no directory because this is a built in modules. 

//access module of os
//info about current user
const user = os.userInfo()
console.log(user)

//method returns the system updtime in seconds
console.log("The system uptime is %i seconds",os.uptime)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}

console.log(currentOS);
