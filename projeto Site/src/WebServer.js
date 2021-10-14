const express = require('express');
const app = express();
//const favicon = require('serve-favicon');
const path = require('path');
const handlebars = require('express-handlebars');
const cors = require('cors');

// Routes
const homeRouter = require('./routes/site/homeRouter')

// layouts
app.set('views', path.join(__dirname, 'views'));

//Config Handlebars
var hbs = handlebars.create({
    defaultLayout: 'main',
    //partialsDir: [path.join(__dirname, 'views/partials')]
});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// public
app.use(express.static(path.join(__dirname, 'public')));
//app.use(favicon(path.join(__dirname, 'public', 'images', 'parkhenri-icone.gif')));

// Definição das rotas na app
app.use('/portfolio', homeRouter);

app.get("/", (req, res)=>{
    res.redirect('/portfolio');
})

//servidor
app.listen(3000, ()=>{
    console.log('Servidor no ar na porta 3000');
})