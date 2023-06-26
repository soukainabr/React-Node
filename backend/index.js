const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const UserModel = require('./models/Users')
const usersRoutes = require('./routes/userRoutes');
/////////////////

const app = express();
app.use(cors());
app.use(express.json());

//connect to mongodb
const uri = "mongodb+srv://admin:admin@cluster0.k4xnmmn.mongodb.net/";
mongoose.connect(uri,{useNewUrlParser:true,useUnifiedTopology:true})
    .then((result)=>app.listen(3001))
    .catch((err) => console.log(err) );

app.use('/users',usersRoutes)

    