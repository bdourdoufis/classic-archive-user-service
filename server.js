var express = require('express')
var app = express()

const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/classicservices',
    {useNewUrlParser: true, useUnifiedTopology: true})
app.use(express.json())
app.use(express.urlencoded())
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers',
        'Content-Type, X-Requested-With, Origin');
    res.header('Access-Control-Allow-Methods',
        'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    next();
});

require('./controllers/favorites-controller')(app)
require('./controllers/users-controller')(app)

app.listen(process.env.PORT || 4000)
