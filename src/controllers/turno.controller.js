import { TurnosFacade } from '../services/turnosFacade.js';

export class TurnoController {
  constructor() {
    this.facade = new TurnosFacade();
  }

  obtenerTurnos = (req, res) => {
    const turnos = this.facade.obtenerTurnos();
    res.json(turnos);
  };

  obtenerTurnoPorId = (req, res) => {              // 🔹 NUEVO
    const { id } = req.params;
    const turno = this.facade.obtenerTurnoPorId(id);

    if (!turno) {
      return res.status(404).json({ mensaje: 'Turno no encontrado' });
    }

    res.json(turno);
  };

  crearTurno = (req, res) => {
    const nuevoTurno = this.facade.crearTurno(req.body);
    res.status(201).json(nuevoTurno);
  };

  actualizarTurno = (req, res) => {                // 🔹 NUEVO
    const { id } = req.params;
    const datos = req.body;

    const turnoActualizado = this.facade.actualizarTurno(id, datos);

    if (!turnoActualizado) {
      return res.status(404).json({ mensaje: 'Turno no encontrado' });
    }

    res.json(turnoActualizado);
  };

  eliminarTurno = (req, res) => {
    const eliminado = this.facade.eliminarTurno(req.params.id);
    res.json({ eliminado });
  };
}
