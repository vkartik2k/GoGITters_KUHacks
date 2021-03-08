const express = require('express')
const app = express()
const mongoose= require('mongoose')
const cors=require('cors');

require('dotenv').config() 
require('./models/user');
const path = require('path');
app.use('/login', express.static(__dirname+'/login'))
app.use('/dashboard', express.static(__dirname+'/dashboard'))
app.use('/teacher/dashboard', express.static(__dirname+'/teacher'))
const User = mongoose.model('User');
const authenticate = require('./middleware/authenticate')
const restrictTo = require('./middleware/restrictTo')
app.use(cors());
app.use(express.json())
app.use(require('./routes/auth/auth'))
app.use(require('./routes/teacher/index'))
app.use(require('./routes/student/index'))


mongoose.connect(process.env.MONGOURI,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
mongoose.connection.on('connected',()=>{
    console.log("connected to mongo");
})
mongoose.connection.on('err',()=>{
    console.log("error while connecting",err);
})
app.listen('3000',()=>{
    console.log("server running at port 3000" )
})