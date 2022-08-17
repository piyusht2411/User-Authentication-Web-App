const express = require('express');
const app = express();
const port = 8000;

app.listen(port, (err)=>{
    if(err){ console.log(`Error is :${err}`);}
    console.log(`Server is runing on port : ${port}`);
})