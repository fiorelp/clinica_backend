import {Router} from 'express';
import {createEspecialidad,getEspecialidad, updateEspecialidad, eraseEspecialidad, showEspecialidad} from '../controllers/especialidad.controllers.js';

const router = Router();
router.get('/especialidad', getEspecialidad)
router.post('/especialidad',createEspecialidad)
router.put('/especialidad/:id',updateEspecialidad)
router.delete('/especialidad/:id',eraseEspecialidad)
router.get('/especialidad/:id',showEspecialidad)

export default router;