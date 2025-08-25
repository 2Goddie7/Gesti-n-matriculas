import Estudiante from "../models/Estudiantes.js";

const crearEstudiante = async (req, res) => {
  try {
    const estudiante = new Estudiante(req.body)
    await estudiante.save()
    res.status(201).json(estudiante)
  } catch (error) {
    res.status(400).json({ msg: error.message })
  }
}

const listarEstudiantes = async (req, res) => {
  const estudiantes = await Estudiante.find()
  res.json(estudiantes)
}

const obtenerEstudiante = async (req, res) => {
  try {
    const estudiante = await Estudiante.findById(req.params.id)
    if (!estudiante) return res.status(404).json({ msg: "Estudiante no encontrado" })
    res.json(estudiante)
  } catch (error) {
    res.status(400).json({ msg: error.message })
  }
}

const actualizarEstudiante = async (req, res) => {
  try {
    const estudiante = await Estudiante.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.json(estudiante)
  } catch (error) {
    res.status(400).json({ msg: error.message })
  }
}

const eliminarEstudiante = async (req, res) => {
  try {
    await Estudiante.findByIdAndDelete(req.params.id)
    res.json({ msg: "Estudiante eliminado" })
  } catch (error) {
    res.status(400).json({ msg: error.message })
  }
}

export { 
    crearEstudiante,
    listarEstudiantes, 
    obtenerEstudiante, 
    actualizarEstudiante, 
    eliminarEstudiante 
}
