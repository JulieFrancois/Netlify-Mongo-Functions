/** @format */
const handleRequest = require("../utils/request");
const Persona = require("../models/persona-model");

const postPersona = handleRequest(async (body) => {
  const movieData = body;
  const movie = await new Persona(movieData)
  return movie;
});

const getPersona = handleRequest(async () => {
  const movies = await Persona.find();
  return movies;
});

const getPersonaById = handleRequest(async (id) => {
  const movie = await Persona.findById(id);
  if (!movie) throw new Error("Persona not found");
  return movie;
});

const updatePersona = handleRequest(async (id, body) => {
  const movieData = body;
  const movie = await Persona.findByIdAndUpdate(id, movieData, {
    new: true,
  });
  if (!movie) throw new Error("Persona not found");
  return movie;
});

const deletePersona = handleRequest(async (id) => {
  const movie = await Persona.findByIdAndDelete(id);
  if (!movie) throw new Error("Persona not found");
  return movie;
});

module.exports = {
  postPersona,
  getPersona,
  getPersonaById,
  updatePersona,
  deletePersona,
};
