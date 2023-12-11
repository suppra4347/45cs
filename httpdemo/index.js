const http=require('http');

const server=http.createServer(function(req,res){
    res.write('This is home page');
    res.end();
})

server.listen(6969,'localhost',() => {
    console.log('Server started and waiting for request at localhost:6969');
})