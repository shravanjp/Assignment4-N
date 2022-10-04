const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const app = express();

app.set('view engine','ejs');
app.set('views','views');
// app.engine('ejs', require('ejs').__express);

const adminData = require('./routes/admin');
const userData = require('./routes/users');

app.use(bodyParser.urlencoded({extended:false}));

app.use('/admin', adminData.routes);
app.use('/users',userData.routes);
console.log("test1");
app.use('/',function(req,res,next){
    res.status(404).render('404',{pageTitle:'404 Error'});
})
console.log("test2");


app.listen(3000);
console.log("test3");
