import {sequelize} from '../database/database.js';

import { DataTypes } from "sequelize";


export const Cobertura=sequelize.define('cobertura', {  
    id:{
        type:DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    cobertura:{
        type:DataTypes.STRING
    },
    },{
        timestamps: true}
)