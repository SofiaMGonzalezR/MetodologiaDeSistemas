import express from 'express';
import { TurnoController } from '../controllers/turno.controller.js';

const router = express.Router();
const turnoController = new TurnoController();

router.get('/', turnoController.obtenerTurnos);
router.post('/', turnoController.crearTurno);
router.delete('/:id', turnoController.eliminarTurno);

export default router;
