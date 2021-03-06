const express = require('express')
const router = express.Router()
var kafka = require('../kafka/client');


router.delete("/deleteaccount", function (req, res) {
    console.log("Within delete account");
    console.log("Email id: ", req.query.id)
    kafka.make_request('deleteaccount', req.query.id, function (err, results) {
        console.log('in result');
        console.log(results);
        if (err || results == null) {
            console.log("Inside err");
            res.sendStatus(401).end("Delete account failed");
            return;
        } else {
            console.log("Inside else");
            console.log(req.session.id)
            req.session.user = results;
            req.session.save();
            res.sendStatus(200).end("Delete account Success");
        }

    });
})

module.exports = router;