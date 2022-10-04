const path = require('path');
const express = require('express');

const router = express.Router();

const adminData = require('./admin');

router.get('/users', function(req,res,next){
    res.render('users',{
        pageTitle : 'Users',
        users : adminData.users
    });
})

module.exports.routes = router;
