const mongoose = require("mongoose");
// Dépendance qui permet de relier à mango DB

const personaSchema = new mongoose.Schema({
  age: {
    type: Number,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  city:{
    type: String,
    required : true
  },
  activity:{
    type: Array,
    required : true
  },
  mbti:{
    type: Number,
    required : true
  }
  }


);

module.exports = mongoose.model("Persona", personaSchema);
