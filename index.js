const express = require('express');
const app = express();
const cors = require('cors')
const mongoose = require('mongoose');
const BusinessRouter = require('./services/businesses/Business-router')
require('dotenv/config')

app.use(cors())
app.use(express.json())








mongoose.connect(process.env.DB_PASSWORD,
    {useNewUrlParser:true, useUnifiedTopology:true},
    ()=> console.log('connected by mongoose'))
    
    app.use('/business', BusinessRouter)
    
    app.get('/', (req, res) => {
        res.send('<h1> We are working withsss </h1>')
    });

   

app.listen(process.env.PORT, ()=> console.log('reporting console from server'))
