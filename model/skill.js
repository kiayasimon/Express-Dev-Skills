const skills = [
    {id: 789, skill: "singing", done: true},
    {id: 790, skill: "writing", done: true},
    {id: 791, skill: "Coding", done: true}
];


function getAll() {
    return skills;
};

function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
}

function create(skill) {
    //Generate a new id.
    skill.id = Date.now() % 1000000;
    // Give yourself some credit, consider the skill done
    skill.done = true;
    skills.push(skill);

};

function deleteOne(id) {
    id = parseInt(id);
    //Find the index for the skill
    const idx = skills.findIndex((skill) => skill.id === id);
    skills.splice(idx, 1);
}

module.exports =  {
    getAll,
    create,
    getOne,
    deleteOne 
};
