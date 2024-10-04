const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
const PORT = 4500;


app.get('/api', (req,res)=>{
    const inform = [
        {
            name:'hayee',
            background:'https://images.unsplash.com/photo-1727791962712-1d36ec09b068?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        }
    ]
    res.send(inform);
})

app.listen(PORT, ()=>{
    console.log(`the server is runining on  localhost:${PORT}`)
})