import express from 'express';

const app = express();

import dotenv from 'dotenv'

dotenv.config();

let port=process.env.PORT || 3030;

app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})

app.get('/',(req,res)=>{
    res.send('hello world');
})