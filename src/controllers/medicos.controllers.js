import { Medicos } from "../model/medicos.js";

const getMedicos = async (req, res) => {
    try {
        const medicos = await Medicos.findAll();
        console.log(medicos);
        res.json(medicos)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
};

const createMedicos = async (req, res) => {
    try {
        const { nombre,
            apellido,
            direccion,
            localidad,
            provincia,
            telefono,
            dni,
            fecha_nac,
            matricula,
            fechaIngreso
        } = req.body
        const nuevoMedico = await Medicos.create({
            nombre,
            apellido,
            direccion,
            localidad,
            provincia,
            telefono,
            dni,
            fecha_nac,
            matricula,
            fechaIngreso
        });
        console.log("Médico agregado.");
        res.send("Médico agregado.")
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
};

const showMedico = async (req, res) => {
    try {
        const { id } = req.params;

        const medico = await Medicos.findByPk(id);
        if (!medico) {
            return res.status(400).json({ error: 'El médico no existe' })
        }

        res.json(medico)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
};

const eraseMedico = async (req, res) => {
    try {
        const { id } = req.params;

        const medico = await Medicos.findByPk(id);
        if (!medico) {
            return res.status(400).json({ error: 'El médico no existe' })
        }

        await Medicos.destroy({
            where: {
                id,
            },
        });
        res.send("Medico eliminado.")
    } catch (error) {
        res.status(500).json({ message: error.message })
    }

};

const updateMedico = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre,
            apellido,
            direccion,
            localidad,
            provincia,
            telefono,
            dni,
            fecha_nac,
            matricula,
            fechaIngreso } = req.body;
            
        const medico = await Medicos.findByPk(id);
        if (!medico) {
            return res.status(400).json({ error: 'El médico no existe' })
        }

        medico.nombre = nombre;
        medico.apellido = apellido;
        medico.direccion = direccion;
        medico.localidad = localidad;
        medico.provincia = provincia;
        medico.telefono = telefono;
        medico.dni = dni;
        medico.fecha_nac = fecha_nac;
        medico.matricula = matricula;
        medico.fechaIngreso = fechaIngreso;

        await medico.save();

        res.json(medico);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }

}

export { createMedicos, getMedicos, showMedico, eraseMedico, updateMedico }