let Users = require('../model/user');

// Récupérer tous les users (GET)
function getUsers(req, res) {
    Users.find((err, users) => {
        if (err) {
            res.send(err);
        }
        res.send(users);
    });
}
module.exports = {getUsers};