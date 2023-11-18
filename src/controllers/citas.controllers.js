import { Citas } from "../model/citas.js";
import { Cobertura } from "../model/cobertura.js";

import { Pacientes } from "../model/pacientes.js";
import { Medicos } from "../model/medicos.js";
import { Horarios } from "../model/horarios.js";
import { Especialidad } from "../model/especialidad.js";



const getCitas = async (req, res) => {
    try {
        const citas = await Citas.findAll();
        console.log(citas);
        res.json(citas)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
};

const createCita = async (req, res) => {
    try {
        const {
            id_paciente,
            id_medico,
            id_horario,
            id_especialidad,
            idCobertura,
        } = req.body

        const paciente = await Pacientes.findByPk(id_paciente);

        if(!paciente){
            return res.status(400).json({error:"El paciente no existe"})
        }

        const medico = await Medicos.findByPk(id_medico);

        if(!medico){
            return res.status(400).json({error:"El medico no existe"})
        }

        const horario = await Horarios.findByPk(id_horario);

        if(!horario){
            return res.status(400).json({error:"El horario no se encuentra disponible"})
        }

        const especialidad = await Especialidad.findByPk(id_especialidad);

        if(!especialidad){
            return res.status(400).json({error:"La especialidad no se encuentra disponible en nuestra cartilla "})
        }
       

        const cobertura = await Cobertura.findByPk(idCobertura);

        if(!cobertura){
            return res.status(400).json({error:"El tipo de cobertura solicitado no se encuentra disponible"})
        }

        const nuevaCita = await Citas.create({
            id_paciente,
            id_medico,
            id_horario,
            id_especialidad,
            idCobertura,
        });
        console.log("Cita agendada.");
        res.send("Cita agendada.")
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
};

const showCita = async (req, res) => {
    try {
        const { id } = req.params;
        const cita = await Citas.findByPk(id);
        res.json(cita)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
};

const eraseCita = async (req, res) => {
    try {
        const { id } = req.params;
        await Citas.destroy({
            where: {
                id,
            },
        });
        res.send("Cita cancelada.")
    } catch (error) {
        res.status(500).json({ message: error.message })
    }

};

const updateCita = async (req, res) => {
    try {
        const { id } = req.params;
        const {
            id_paciente,
            id_medico,
            id_horario,
            id_especialidad,
            id_cobertura, } = req.body;
        const medico = await Citas.findByPk(id);
        medico.id_paciente = id_paciente;
        medico.id_medico = id_medico;
        medico.id_horario = id_horario;
        medico.id_especialidad = id_especialidad;
        medico.id_cobertura = id_cobertura;

        await cita.save();

        res.json(cita);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }

}

export { createCita, getCitas, showCita, eraseCita, updateCita }