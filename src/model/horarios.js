import {sequelize} from '../database/database.js';

import { DataTypes } from "sequelize";

export const Horarios=sequelize.define('horarios', {  
    id:{
        type:DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    horario:{
        type:DataTypes.STRING
    },
    },{
        timestamps: true}
)