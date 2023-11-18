import { Horarios } from "../model/horarios.js";

const getHorarios = async (req, res) => {
    try {
        const horarios = await Horarios.findAll();
        console.log(horarios);
        res.json(horarios)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
};



const createHorario = async (req, res) => {
    try {
        const {
            horario
        } = req.body
        const nuevohorario = await Horarios.create({
            horario
        });
        console.log("Horario agregado.");
        res.send("Horario agregado.")
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
};

const showHorario = async (req, res) => {
    try {
        const { id } = req.params;

        const horario = await Horarios.findByPk(id);
        if (!horario) {
            return res.status(400).json({ error: 'El horario buscado no está disponible' })
        }

        res.json(horario);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
};

const eraseHorario = async (req, res) => {
    try {
        const { id } = req.params;

        const horario = await Horarios.findByPk(id);
        if (!horario) {
            return res.status(400).json({ error: 'El horario buscado no está disponible' })
        }

        await Horarios.destroy({
            where: {
                id,
            },
        });
        res.send("Horario eliminado.")
    } catch (error) {
        res.status(500).json({ message: error.message })
    }

};

const updateHorario = async (req, res) => {
    try {
        const { id } = req.params;
        const {
            horario
        } = req.body;
        const hora = await Horarios.findByPk(id);
        if (!horario) {
            return res.status(400).json({ error: 'El horario buscado no está disponible' })
        }
        hora.horario = horario;

        await hora.save();

        res.json(hora);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }

}

export { createHorario, getHorarios, showHorario, eraseHorario, updateHorario }