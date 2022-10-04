const path = require('path');
const express = require('express');

const router = express.Router();

const users = [];

router.get('/add-user',function(req,res,next){
    res.render('add-user',{pageTitle : 'Add User'});
})

router.post('/add-user/user',function(req,res,next){
    users.push({title: req.body.title});
    res.redirect('/users');
})

module.exports.routes = router;
module.exports.users = users;