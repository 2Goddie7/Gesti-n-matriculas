import Matricula from "../models/Matriculas.js";

const crearMatricula = async (req, res) => {
  try {
    const matricula = new Matricula(req.body)
    await matricula.save()
    res.status(201).json(matricula)
  } catch (error) {
    console.log(error)
  }
}

const listarMatriculas = async (req, res) => {
  const matriculas = await Matricula.find()
    .populate("estudiante", "nombre apellido email")
    .populate("materia", "nombre codigo")
  res.json(matriculas)
}

const obtenerMatricula = async (req, res) => {
  try {
    const matricula = await Matricula.findById(req.params.id)
      .populate("estudiante", "nombre apellido")
      .populate("materia", "nombre codigo")
    if (!matricula) return res.status(404).json({ msg: "Matrícula no encontrada" })
    res.json(matricula)
  } catch (error) {
    console.log(error)
  }
}

const actualizarMatricula = async (req, res) => {
  try {
    const matricula = await Matricula.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.json(matricula)
  } catch (error) {
    console.log(error)
  }
}

const eliminarMatricula = async (req, res) => {
  try {
    await Matricula.findByIdAndDelete(req.params.id)
    res.json({ msg: "Matrícula eliminada" })
  } catch (error) {
    console.log(error)
  }
}

export { 
    crearMatricula,
     listarMatriculas,
      obtenerMatricula, 
      actualizarMatricula, 
      eliminarMatricula
}
