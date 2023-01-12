/** @format */
const handleRequest = require("../utils/request");
const Persona = require("../models/persona-model");

const postPersona = handleRequest(async (body) => {
  const newModel = new Persona(body);
  return await newModel.save();
});

const getPersona = handleRequest(async () => {
  const datas = await Persona.find();
  return datas;
});

const getPersonaById = handleRequest(async (body, id) => {
  const data = await Persona.findById(id);
  if (!data) throw new Error("Movie not found");
  return data;
});

const putPersonaById = handleRequest(async (body, id) => {
  const data = await Persona.findByIdAndUpdate(id, body, {
    new: true,
  });
  if (!data) throw new Error("Movie not found");
  return data;
});

const deletePersonaById = handleRequest(async (body, id) => {
  const data = await Persona.findByIdAndDelete(id);
  if (!data) throw new Error("Movie not found");
  return data;
});

module.exports = {
  postPersona,
  getPersona,
  getPersona,
  putPersonaById,
  deletePersonaById,
};
