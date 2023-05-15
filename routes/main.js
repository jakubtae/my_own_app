const express = require('express');
const { parse } = require('path');
const router = express.Router();
const fs = require('fs');
const languages  = [];
fs.readdirSync('./models/langs').forEach(function(file) {
    var name = file.replace('.json', '');
    languages.push(name);
});

console.log(languages);

router.get('/', async (req, res) => {
    res.redirect("/en")
})


router.get('/:language', async (req, res) => {
    try{
        console.log(req.params);
        const wantedFile = req.params.language + ".json";
        console.log(wantedFile);
        res.render('main/landing.ejs',);
    } catch(e){
        res.send("error").status(404);
    }
})

module.exports = router;