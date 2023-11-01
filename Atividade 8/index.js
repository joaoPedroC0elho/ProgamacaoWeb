const express = require('express');
const mustacheExpress = require('mustache-express');

const mustachExpress = require('mustache-express');

const app = express();

app.engine('html',mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname +'/src/views');

app.use(express.urlencoded({extended: true}));

app.get('/', function(req, res){
    res.render('index.html')
})



const PORT = 8081;
app.listen(PORT, function(){
    console.log('App rodando na porta' + PORT);
});