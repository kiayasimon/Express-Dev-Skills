const skills = require("../model/skills");
const index = (req, res)=> {
    res.render("skills/index", {
        skills: skills.getAll(),
        title: "New Skill"
    });
};

module.exports = {
    index
};