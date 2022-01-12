const http = require('http');


//two parameters are objects, req and res
//req = represents the incoming request. so imagin a client is requesting from the web broser
//res = response is what we are sending back

const server = http.createServer((req, res)=>{

//look for url property to find what address the client is requesting
// " '/' represents homepage  "
if(req.url === '/'){
    //you can place everthing in the end()
    res.end('Welcome to our Home Page')
}
else if(req.url ==='/about'){
    res.end('Here is our short history')
}
else{
    res.end(`
    <h1>Oops!</h1>
    <p>We can't seem to find the page you are looking for</p>
    <a href="/">back home</a>
    `)
}


    //console.log(req);
//res.write('Welcome to our Homepage')
//res.end()
})

server.listen(5000)