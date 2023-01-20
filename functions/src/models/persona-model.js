const mongoose = require("mongoose");
// Dépendance qui permet de relier à mango DB

const personaSchema = new mongoose.Schema({

  //PROFIL///////////////////////////////////////////////////////////////////
  age: {
    type: Number,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  activity: {
    type: Array,
    required: true
  },

  //MBTI///////////////////////////////////////////////////////////////////
  spirit: {
    type: Number,
    required: true
  },
  energy: {
    type: Number,
    required: true
  },
  nature: {
    type: Number,
    required: true
  },
  tactic: {
    type: Number,
    required: true
  },

  //OTHERS//////////////////////////////////////////////////////////////////
  interest: {
    type: Array,
    required: true
  },
  frustrations: {
    type: Array,
    required: true
  },
  tools: {
    type: Array,
    required: true
  }
  }


);

module.exports = mongoose.model("Persona", personaSchema);
