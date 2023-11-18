import {sequelize} from '../database/database.js';

import { DataTypes } from "sequelize";

export const Especialidad=sequelize.define('especialidad', {  
    id:{
        type:DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    especialidad:{
        type:DataTypes.STRING
    },
    },{
        timestamps: true}
)