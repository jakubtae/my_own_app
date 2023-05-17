const express = require("express");
const { parse } = require("path");
const router = express.Router();
const fs = require("fs");
const fetch = require("fetch");
router.get("/", async (req, res) => {
  res.redirect("/pl");
});

router.get("/:language", checkLang,async (req, res) => {
  try {
    if (req.params != "favicon.ico") {
      const filePath = "./models/langs/main/" + req.params.language + ".json";

      if (!fs.existsSync(filePath)) return res.redirect("/en");

      const language = JSON.parse(fs.readFileSync(filePath, "utf-8"));

      res.render("main/landing.ejs", language);
    }
  } catch (e) {
    res.send("error: " + e + " ").status(404);
  }
});

router.get("/:language/projects/:pid", checkLang, async (req, res) => {
  try {
    if (req.params != "favicon.ico") {
      const filePath =
        "./models/langs/projects/" + req.params.language + ".json";

      if (!fs.existsSync(filePath)) return res.redirect("/en");

      var language = JSON.parse(fs.readFileSync(filePath, "utf-8"));
      language.pid = req.params.pid;
      res.render("main/project.ejs", language);
    }
  } catch (e) {
    res.send("error: " + e + " ").status(404);
  }
});

async function checkLang(req, res, next) {
  const link = "http://ip-api.com/json/" + req.ip;
  const response = await fetch(link);
  const data = await response.json();
  if (data.countryCode !== "PL" && req.params.language === "pl") {
    return res.redirect("/en"+req.originalUrl.slice(3));
  }
  if (data.countryCode === "PL" && req.params.language === "en") {
    return res.redirect("/pl"+req.originalUrl.slice(3));
  }
  next();
}

module.exports = router;
