import express from 'express';
import medicosRoutes from './routes/medicos.routes.js';
import pacientesRoutes from "./routes/pacientes.routes.js";
import citasRoutes from './routes/citas.routes.js'
import especialidadRoutes from './routes/especialidad.routes.js'
import horariosRoutes from './routes/horarios.routes.js'
import coberturaRoutes from './routes/cobertura.routes.js'


const app=express();

//middlewares

app.use((req, res, next)=>{
    res.setHeader('Access-Control-Allow-Origin','http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE');
    res.setHeader('Access-Control-Allow-Headers','Content-Type, Authorization');
    next();
})

app.use(express.json());

//rutas
app.use(medicosRoutes);
app.use(pacientesRoutes);
app.use(citasRoutes);
app.use(especialidadRoutes);
app.use(horariosRoutes)
app.use(coberturaRoutes)

export default app;