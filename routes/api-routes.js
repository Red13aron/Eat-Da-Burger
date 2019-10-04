// Import the model (burger.js) to use its database functions.
var express = require("express");

var router = express.Router();

var db = require("../models");

router.post("/api/burgers", function(req, res){
    console.log(req.body);
    db.Burger.create({name:req.body.input, devoured:false}).then(function(dbBurger){
        res.redirect("/");
    })
});

router.put("/api/burgers", function(req, res) {
    db.Burger.update(
        {devoured : req.body.devoured},
        {
            where:{
                id:req.body.id
            }
        }).then(function(dbBurger){
            res.json(dbBurger);
        })
});

// Export routes for server.js to use.
module.exports = router;