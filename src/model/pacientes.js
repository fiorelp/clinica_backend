import { sequelize } from '../database/database.js';

import { DataTypes } from 'sequelize';


export const Pacientes = sequelize.define('pacientes', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING
    },
    apellido: {
        type: DataTypes.STRING
    },
    direccion: {
        type: DataTypes.STRING
    },
    localidad: {
        type: DataTypes.STRING
    },
    provincia: {
        type: DataTypes.STRING
    },
    telefono: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    dni: {
        type: DataTypes.INTEGER
    },
    fecha_nac: {
        type: DataTypes.DATEONLY
    },
    dni: {
        type: DataTypes.INTEGER
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