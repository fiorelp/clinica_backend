import {Router} from 'express';
import {createMedicos, getMedicos, showMedico, eraseMedico, updateMedico} from '../controllers/medicos.controllers.js';

const router = Router();
router.get('/medicos', getMedicos)
router.post('/medicos',createMedicos)
router.put('/medicos/:id',updateMedico)
router.delete('/medicos/:id',eraseMedico)
router.get('/medicos/:id', showMedico)


export default router;