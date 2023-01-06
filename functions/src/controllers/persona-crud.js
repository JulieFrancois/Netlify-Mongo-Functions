/** @format */
const handleRequest = require("../utils/request");
const Persona = require("../models/persona-model");

const postPersona = handleRequest(async (body) => {
  const movieData = body;
  const movie = await Persona.create(movieData);
  return movie;
});

const getPersonas = handleRequest(async () => {
  const movies = await Persona.find();
  return movies;
});

const getPersonasById = handleRequest(async (id) => {
  const movie = await Persona.findById(id);
  if (!movie) throw new Error("Persona not found");
  return movie;
});

const updatePersonas = handleRequest(async (id, body) => {
  const movieData = body;
  const movie = await Persona.findByIdAndUpdate(id, movieData, {
    new: true,
  });
  if (!movie) throw new Error("Persona not found");
  return movie;
});

const deletePersonas = handleRequest(async (id) => {
  const movie = await Persona.findByIdAndDelete(id);
  if (!movie) throw new Error("Persona not found");
  return movie;
});

module.exports = {
  postPersonas,
  getPersonas,
  getPersonasById,
  updatePersonas,
  deletePersonas,
};
