const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine','ejs');
app.set('views','views');

const adminData = require('./routes/admin');
const userData = require('./routes/users');

app.use(bodyParser.urlencoded({extended:false}));

app.use('/admin', adminData.routes);
app.use('/users',userData.routes);
app.use('/',function(req,res,next){
    res.status(404).render('404',{pageTitle:'404 Error'});
})


app.listen(3000);