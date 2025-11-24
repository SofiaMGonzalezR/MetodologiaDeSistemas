import express from 'express';
import { TurnoController } from '../controllers/turno.controller.js';

const router = express.Router();
const turnoController = new TurnoController();

router.get('/', turnoController.obtenerTurnos);
router.get('/:id', turnoController.obtenerTurnoPorId);      // 🔹 NUEVO
router.post('/', turnoController.crearTurno);
router.put('/:id', turnoController.actualizarTurno);         // 🔹 NUEVO
router.delete('/:id', turnoController.eliminarTurno);

export default router;
