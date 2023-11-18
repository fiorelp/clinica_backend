import { Router } from 'express';
import {showHorario, eraseHorario, updateHorario, createHorario, getHorarios} from '../controllers/horarios.controllers.js';

const router = Router();
router.get('/horarios', getHorarios)
router.post('/horarios',createHorario)
router.put('/horarios/:id',updateHorario)
router.delete('/horarios/:id',eraseHorario)
router.get('/horarios/:id',showHorario)

export default router;