const User = require("../models/UserModel");

//here i need to adapt this code to update the uder model with info from a form
module.exports = {
    create: function (req, res) {
        User.register(new User({ username: req.body.username }), req.body.password, function (err, user) {
            if (err) {
                console.log(err);
                return res.send({message: "Failed to register new user.", error: err});
            }

            passport.authenticate('local')(req, res, function () {
                res.redirect('/');
            });
        });
    }
};