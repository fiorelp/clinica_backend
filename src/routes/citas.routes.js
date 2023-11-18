import {Router} from 'express';
import {createCita, getCitas, showCita, eraseCita, updateCita} from '../controllers/citas.controllers.js';

const router = Router();
router.get('/citas', getCitas)
router.post('/citas',createCita)
router.put('/citas/:id',updateCita)
router.delete('/citas/:id',eraseCita)
router.get('/citas/:id',showCita)

export default router;