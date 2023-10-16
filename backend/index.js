const express = require('express');

const {PORT,monogoDBURL} = require("./config");
const mongoose = require('mongoose');
const userRouter = require('./routes/user');

const cors = require('cors');
const app = express();
app.use(express.json());

app.use(
    cors({
        origin: 'http://127.0.0.1:3005',
        methods: ['GET', 'POST' , 'PUT','DELETE'],
        allowedHeaders : ['content-type']
    })
)


app.use("/users", userRouter)





mongoose.connect(monogoDBURL)
.then(()=>{
    console.log('App Connected to database');
    app.listen(PORT, ()=>{
        console.log(`server listening on port: ${PORT}`);
    });
})
.catch((err)=>{
    console.log(err);
})