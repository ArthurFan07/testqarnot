const express = require('express');
var app = express();

var morgan = require('morgan');
var helmet = require('helmet');
var mongoose = require('mongoose');
var materialRoutes = require('./routes/material');
var typeRoutes = require('./routes/type');

mongoose.connect('mongodb+srv://arthur:12345@cluster0.cgbgj.mongodb.net/Cluster0?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

var {json} = require('express');

app.use(json({limit : '50mb'}))

app.use(morgan('combined'));

app.use(helmet());

app.get('/ping', (req, res) => {
    res.status(200).send('pong')
})

app.listen(process.env.PORT || 3000, ()=> {
    console.log('Serveur is running')
})

app.use('/material', materialRoutes);
app.use('/type', typeRoutes);
