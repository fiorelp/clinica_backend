import { Cobertura } from "../model/cobertura.js";
import { Pacientes } from "../model/pacientes.js";

const getPacientes = async (req, res) => {
    try {
        const pacientes = await Pacientes.findAll();
        console.log(pacientes);
        res.json(pacientes)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}



const createPaciente = async (req, res) => {
    try {
        const {
            nombre,
            apellido,
            direccion,
            localidad,
            provincia,
            telefono,
            email,
            dni,
            fecha_nac,
            idCobertura
        } = req.body

        const cobertura = await Cobertura.findByPk(idCobertura);

        if(!cobertura){
            return res.status(400).json({error:"El tipo de cobertura solicitado no se encuentra disponible"})
        }

        const nuevoPaciente = await Pacientes.create({
            nombre,
            apellido,
            direccion,
            localidad,
            provincia,
            telefono,
            email,
            dni,
            fecha_nac,
            idCobertura
        });
        console.log("Paciente agregado.");
        res.send("Paciente agregado.")
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
};

const showPaciente = async (req, res) => {
    try {
        const { id } = req.params;

        const paciente = await Pacientes.findByPk(id);
        if (!paciente) {
            return res.status(400).json({ error: 'El paciente no existe' })
        }
        
        res.json(paciente);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
};

const erasePaciente = async (req, res) => {
    try {
        const { id } = req.params;

        const paciente = await Pacientes.findByPk(id);
        if (!paciente) {
            return res.status(400).json({ error: 'El paciente no existe' })
        }

        await Pacientes.destroy({
            where: {
                id,
            },
        });
        res.send("Paciente eliminado.")
    } catch (error) {
        res.status(500).json({ message: error.message })
    }

};

const updatePaciente = async (req, res) => {
    try {
        const { id } = req.params;
        const {
            nombre,
            apellido,
            direccion,
            localidad,
            provincia,
            telefono,
            email,
            dni,
            fecha_nac,
            id_cobertura } = req.body;
        const paciente = await Pacientes.findByPk(id);
        if (!paciente) {
            return res.status(400).json({ error: 'El paciente no existe' })
        }

        paciente.nombre = nombre;
        paciente.apellido = apellido;
        paciente.direccion = direccion;
        paciente.localidad = localidad;
        paciente.provincia = provincia;
        paciente.telefono = telefono;
        paciente.email = email;
        paciente.dni = dni;
        paciente.fecha_nac = fecha_nac;
        paciente.id_cobertura = id_cobertura;

        await paciente.save();

        res.json(paciente);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }

}

export { createPaciente, getPacientes, showPaciente, erasePaciente, updatePaciente }