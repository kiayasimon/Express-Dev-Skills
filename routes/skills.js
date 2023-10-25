var express = require('express');
var router = express.Router();
var skillsCtrl = require("../controller/skills");
const skills = require('../controller/skills');

/* GET users listing. */
router.get("/", skillsCtrl.index);

//GET /skill/new new
router.get("/new", skillsCtrl.new);

//Get /skill/:id (nto sure why it's colon Id)
router.get("/:id", skillsCtrl.show);

//POST /skills
router.post("/", skillsCtrl.create);

// DELETE METHOD /skills/:id
router.delete("/:id", skillsCtrl.delete);

module.exports = router;
