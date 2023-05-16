const express = require('express');
const { parse } = require('path');
const router = express.Router();
const fs = require('fs');

router.get('/', async (req, res) => {
    res.redirect("/en")
})


router.get('/:language', async (req, res) => {
    try{
        if(req.params != "favicon.ico"){
            const filePath = "./models/langs/main/"+req.params.language + ".json";

            if (!fs.existsSync(filePath)) return res.redirect("/en");

            const language = JSON.parse(fs.readFileSync(filePath, "utf-8"))
            
            res.render('main/landing.ejs',language );
        }
    }catch(e){
        res.send("error: " + e + " ").status(404);
    }
})

router.get('/:language/projects/:pid', async (req,res)=>{
    try{
        if(req.params != "favicon.ico"){
            const filePath = "./models/langs/projects/"+req.params.language + ".json";

            if (!fs.existsSync(filePath)) return res.redirect("/en");

            var language = JSON.parse(fs.readFileSync(filePath, "utf-8"))
            language.pid = req.params.pid;
            res.render('main/project.ejs', language);
        }
    } catch(e){
        res.send("error: " + e + " ").status(404);
    }
})

module.exports = router;