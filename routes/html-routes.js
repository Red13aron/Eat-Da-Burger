var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var db = require("../models");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {  
    db.Burger.findAll({}).then(function(dbBurger){
        const Burgers = {
            burgers:dbBurger
        };
        res.render("index", Burgers);
    })
});

router.put("/api/burgers", function(req, res) {
    db.Burger.update(
        devoured = req.body.devoured,
        {
            where:{
                id:req.body.id
            }
        }).then(function(dbBurger){
            res.json(dbBurger);
        })
})

// Export routes for server.js to use.
module.exports = router;