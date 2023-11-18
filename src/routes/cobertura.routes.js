import { Router } from 'express';
import {showCobertura, eraseCobertura, updateCobertura, createCobertura, getCobertura} from '../controllers/cobertura.controllers.js';

const router = Router();
router.get('/cobertura', getCobertura)
router.post('/cobertura',createCobertura)
router.put('/cobertura/:id',updateCobertura)
router.delete('/cobertura/:id',eraseCobertura)
router.get('/cobertura/:id',showCobertura)

export default router;