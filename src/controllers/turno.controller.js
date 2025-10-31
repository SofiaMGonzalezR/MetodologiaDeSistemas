import { TurnosFacade } from '../services/turnosFacade.js';

export class TurnoController {
  constructor() {
    this.facade = new TurnosFacade();
  }

  obtenerTurnos = (req, res) => {
    const turnos = this.facade.obtenerTurnos();
    res.json(turnos);
  };

  crearTurno = (req, res) => {
    const nuevoTurno = this.facade.crearTurno(req.body);
    res.status(201).json(nuevoTurno);
  };

  eliminarTurno = (req, res) => {
    const eliminado = this.facade.eliminarTurno(req.params.id);
    res.json({ eliminado });
  };
}
