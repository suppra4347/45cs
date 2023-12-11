index.js

const http= require('http');
const url = require('url');
const fs = require('fs');
const port = 8081;
const host= "127.0.0.1";
const server =  http.createServer((req,res)=>{

    const q= url.parse(req.url,true)
 
    const urlString=q.pathname;

    if(urlString == '/')
        res.end('<h1>Home page </h1>')

    else if (urlString=='/users'){
        data=fs.readFileSync('users.json');
        res.write(data);
        res.end()
    }

    else if(urlString=='/add'){
        const user = q.query;
        data =fs.readFileSync('users.json');
        users=JSON.parse(data)
        users.push({"name":user.name,"age":user.age})
        data =JSON.stringify(users);
        fs.writeFileSync('users.json',data);
        res.end('user data added..')
    }

})
server.listen(port,host,()=>{

    console.log("server started and waiting for"+"request at localhost:8081");

})