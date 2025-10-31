import { TurnoFactory } from '../patterns/turnoFactory.js';
import { Observer } from '../patterns/observer.js';

export class TurnosFacade {
  constructor() {
    this.factory = new TurnoFactory();
    this.observer = new Observer();
    this.turnos = [];
  }

  obtenerTurnos() {
    return this.turnos;
  }

  crearTurno(data) {
    const turno = this.factory.crearTurno(data.tipo, data);
    this.turnos.push(turno);
    this.observer.notificar(`Se creó un nuevo turno para ${data.paciente}`);
    return turno;
  }

  eliminarTurno(id) {
    this.turnos = this.turnos.filter(t => t.id !== id);
    this.observer.notificar(`Se eliminó el turno con id ${id}`);
    return true;
  }
}
