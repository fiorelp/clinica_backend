import {sequelize} from '../database/database.js';

import { DataTypes } from "sequelize";


export const Medicos=sequelize.define('medicos', {  
    id:{
        type:DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
},
    nombre:{
        type:DataTypes.STRING
    },
    apellido:{
        type:DataTypes.STRING
    },
    direccion:{
        type:DataTypes.STRING
    },
    localidad:{
        type:DataTypes.STRING
    },
    provincia:{
        type:DataTypes.STRING
    },
    telefono:{
        type:DataTypes.STRING
    },
    dni:{
        type:DataTypes.INTEGER
    },
    fecha_nac:{
        type:DataTypes.DATEONLY
    },
    matricula:{
        type:DataTypes.INTEGER
    },
    fechaIngreso:{
        type:DataTypes.DATEONLY
    }
    },{
        timestamps: true}
)