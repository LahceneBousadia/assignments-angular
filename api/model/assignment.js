let mongoose = require("mongoose");
var aggregation = require("mongoose-aggregate-paginate-v2");
let Schema = mongoose.Schema;

let AssignmentSchema = Schema({
    id:Number,
    nom: String,
    dateDeRendu: Date,
    rendu: Boolean,
    note: String,
    remarques: String,
    matiere: String,
    eleve: String
});
AssignmentSchema.plugin(aggregation);

// C'est à travers ce modèle Mongoose qu'on pourra faire le CRUD
module.exports = mongoose.model("Assignment", AssignmentSchema);
