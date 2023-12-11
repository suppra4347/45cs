const express = require('express');
const port = 3000;
const app = express();

app.get('/',(req,res)=>{
    res.send("You are at the route \" "+req.url+" \"");
})

app.post('/',(req,res)=>{
    res.send("this is post method")
})

app.listen(port,()=>{
    console.log(`Server listening at port no ${port}`);
})