const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
mongoose.connect('monogodb://localhost/to-do-fancy-api')

// const Task = require('./routers/task')
// const User = require('./routers/user')


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: "application/*+json" }));
app.use(bodyParser.json({ type: "application/x-www-form-urlencoded" }));

app.use(cors());

// app.use("/user", User);
// app.use("/task", Task);


app.listen(3000, ()=>{
    console.log('listen port 3000 running')
})
