var express = require('express');
var router = express.Router();
const { exec } = require("child_process");


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {});
});

// Render error to browser
const renderError = (error) => res.render('error', {message:"System error", error: {status:""}});

router.post('/', function(req, res, next) {


    // Remove anything that ins't a digit or a space
    input = req.body.args.replace(/[^0-9\s]/g, "");

    if (!input) {
        res.render('index', {results: {input:"No input provided", output:""}});
    } else {
        exec(`./bin/poop ${input}` , (error, stdout, stderr) => {
            if (error) {
                console.log(error);
                renderError(error)
            } else if (stderr) {
                console.log(stderr);
                renderError(stderr)
            } else {
                res.render('index', {results: {input:input, output:stdout}});
            }
        });
    }
    
  });

module.exports = router;
