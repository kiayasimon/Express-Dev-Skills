const skills = [
    {id: 789, skill: "singing", done: true},
    {id: 790, skill: "writing", done: true},
    {id: 791, skill: "Coding", done: true}
];

function getAll() {
    return skills;
};

function create(skill) {
    //Generate a new id.
    skill.id = Date.now() % 1000000;
    // Give yourself some credit, consider the skill done
    skill.done = true;
    skills.push(skill);

};

module.exports =  {
    getAll,
    create,
};
