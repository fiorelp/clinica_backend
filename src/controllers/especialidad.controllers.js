import { Especialidad } from "../model/especialidad.js";

const getEspecialidad = async (req, res) => {
    try {
        const especialidad = await Especialidad.findAll();
        console.log(especialidad);
        res.json(especialidad)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
};



const createEspecialidad = async (req, res) => {
    try {
        const {
            especialidad
        } = req.body
        const nuevaEspecialidad = await Especialidad.create({
            especialidad
        });
        console.log("Especialidad agregada.");
        res.send("Especialidad agregada.")
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
};

const showEspecialidad = async (req, res) => {
    try {
        const { id } = req.params;
        const especialidad = await Especialidad.findByPk(id);

        if (!especialidad) {
            return res.status(400).json({ error: 'La especialidad buscada no se encuentra disponible' })
        }

        res.json(especialidad);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
};

const eraseEspecialidad = async (req, res) => {
    try {
        const { id } = req.params;

        const especialidad = await Especialidad.findByPk(id);

        if (!especialidad) {
            return res.status(400).json({ error: 'La especialidad buscada no se encuentra disponible' })
        }

        await Especialidad.destroy({
            where: {
                id,
            },
        });
        res.send("Especialidad eliminada.")
    } catch (error) {
        res.status(500).json({ message: error.message })
    }

};

const updateEspecialidad = async (req, res) => {
    try {
        const { id } = req.params;
        const {
            especialidad
        } = req.body;
        const especial = await Especialidad.findByPk(id);

        if (!especialidad) {
            return res.status(400).json({ error: 'La especialidad buscada no se encuentra disponible' })
        }

        especial.especialidad = especialidad;


        await especial.save();

        res.json(especial);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }

}

export { createEspecialidad, getEspecialidad, showEspecialidad, eraseEspecialidad, updateEspecialidad }