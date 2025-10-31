import { TurnoPresencial, TurnoVirtual } from '../models/turnos.js';

export class TurnoFactory {
  crearTurno(tipo, data) {
    switch (tipo) {
      case 'presencial':
        return new TurnoPresencial(data);
      case 'virtual':
        return new TurnoVirtual(data);
      default:
        throw new Error('Tipo de turno no válido');
    }
  }
}
