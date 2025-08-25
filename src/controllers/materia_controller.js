import Materia from "../models/Materias.js";

const crearMateria = async (req, res) => {
  try {
    const materia = new Materia(req.body)
    await materia.save()
    res.status(201).json(materia)
  } catch (error) {
    console.log(error)
  }
}

const listarMaterias = async (req, res) => {
  const materias = await Materia.find()
  res.json(materias)
}

const obtenerMateria = async (req, res) => {
  try {
    const materia = await Materia.findById(req.params.id);
    if (!materia) return res.status(404).json({ msg: "No se encuentra la materia" })
    res.json(materia)
  } catch (error) {
    console.log(error)
  }
};

const actualizarMateria = async (req, res) => {
  try {
    const materia = await Materia.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.json(materia)
  } catch (error) {
    console.log(error)
  }
}

const eliminarMateria = async (req, res) => {
  try {
    await Materia.findByIdAndDelete(req.params.id)
    res.json({ msg: "Materia eliminada de forma exitosa" })
  } catch (error) {
    console.log(error)
  }
}

export { 
    crearMateria, 
    listarMaterias,
    obtenerMateria, 
    actualizarMateria, 
    eliminarMateria 
}
