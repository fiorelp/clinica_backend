import { sequelize } from '../database/database.js';

import { DataTypes } from "sequelize";


export const Citas = sequelize.define('citas', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_paciente: {
        type: DataTypes.INTEGER,
        references: {
            model: 'pacientes',
            key: 'id'
        },
        foreignKey: true
    },
    id_medico: {
        type: DataTypes.INTEGER,
        references: {
            model: 'medicos',
            key: 'id'
        },
        foreignKey: true
    },
    id_horario: {
        type: DataTypes.INTEGER,
        references: {
            model: 'horarios',
            key: 'id'
        },
        foreignKey: true
    },
    id_especialidad: {
        type: DataTypes.INTEGER,
        references: {
            model: 'especialidads',
            key: 'id'
        },
        foreignKey: true
    },
    idCobertura: {
        type: DataTypes.INTEGER,
        references: {
            model: 'coberturas',
            key: 'id'
        },
        foreignKey: true
    },
}, {
    timestamps: true
}
)