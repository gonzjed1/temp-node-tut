//asychronous
const {readFile,writeFile} = require('fs')

//asynchronous requires a callback
//callback means os that we run that call back when we are done
console.log('start');
readFile('./content/first.txt','utf8',(err,result)=>{
    if(err){
        console.log(err);
        return;
    }
    //console.log((result));
    const first = result;
    readFile('./content/second.txt','utf8',(err,result)=>{
        if(err){
            console.log(err);
            return;
        } 
        const second = result
        writeFile('./content/result-async.txt',
        `Here is the result : ${first}, ${second}`,(err,result)=>{
            if(err){
                console.log(err);
                return;
            }  
            console.log('done with this task') 
        })  
    })
})
console.log('starting next task');

//NOTE:***************
//asynchronous approaches allows for offloading multiple task, the momen we start a task like above we just offload and continue
//that way when user numver one for example the node just offloads that specific task while the other application can keep serving
//1 hour and 32 minutes into the video

//async seems to be more efficient due to offloading task


//result of this will be noisy buffer  we must add provide utf coding

//million dollar question
//how can we set the same fucntionality for asynchronous