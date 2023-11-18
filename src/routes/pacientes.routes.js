import {Router} from 'express';
import {createPaciente,getPacientes,showPaciente, erasePaciente, updatePaciente} from '../controllers/pacientes.controllers.js';

const router = Router();
router.get('/pacientes', getPacientes)
router.post('/pacientes',createPaciente)
router.put('/pacientes/:id',updatePaciente)
router.delete('/pacientes/:id',erasePaciente)
router.get('/pacientes/:id',showPaciente)

export default router;