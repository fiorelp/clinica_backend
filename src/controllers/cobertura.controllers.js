import { Cobertura } from "../model/cobertura.js";

const getCobertura = async (req, res) => {
    try {
        const cobertura = await Cobertura.findAll();
        console.log(cobertura);
        res.json(cobertura)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
};


const createCobertura = async (req, res) => {
    try {
        const {
            cobertura
        } = req.body
        const nuevocobertura = await Cobertura.create({
            cobertura
        });
        console.log("Tipo de cobertura añadido.");
        res.send("Tipo de cobertura añadido.")
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
};

const showCobertura = async (req, res) => {
    try {
        const { id } = req.params;
        const cobertura = await Cobertura.findByPk(id);

        if (!cobertura) {
            return res.status(400).json({ error: 'El tipo de cobertura buscado no se encuentra disponible' })
        }

        res.json(cobertura);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
};

const eraseCobertura = async (req, res) => {
    try {
        const { id } = req.params;
        
        const cobertura = await Cobertura.findByPk(id);

        if (!cobertura) {
            return res.status(400).json({ error: 'El tipo de cobertura buscado no se encuentra disponible' })
        }

        await Cobertura.destroy({
            where: {
                id,
            },
        });
        res.send("Tipo de cobertura eliminado.")
    } catch (error) {
        res.status(500).json({ message: error.message })
    }

};

const updateCobertura = async (req, res) => {
    try {
        const { id } = req.params;
        const {
            cobertura
        } = req.body;
        const tipo = await Cobertura.findByPk(id);

        if (!cobertura) {
            return res.status(400).json({ error: 'El tipo de cobertura buscado no se encuentra disponible' })
        }

        tipo.cobertura = cobertura;

        await tipo.save();

        res.json(tipo);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }

}

export { createCobertura, getCobertura, showCobertura, eraseCobertura, updateCobertura }