import  app from "./app.js"
import { sequelize } from "./database/database.js";
import './model/medicos.js'
import './model/cobertura.js'
import './model/pacientes.js'
import './model/citas.js'
import './model/horarios.js'
import './model/especialidad.js'



async function main(){
       try {
            await sequelize.sync({force:true});
            console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
        
    };

main();

app.listen(3300);

console.log ("servidor en puerto 3300")