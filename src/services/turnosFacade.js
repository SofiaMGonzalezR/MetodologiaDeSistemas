import { TurnoFactory } from '../patterns/turnoFactory.js';
import { Subject, ConsoleObserver } from '../patterns/observer.js';
import fs from 'fs';

const RUTA_ARCHIVO = 'data/turnos.json';

export class TurnosFacade {
  constructor() {
    this.factory = new TurnoFactory();
    this.subject = new Subject();
    this.turnos = [];

    const loggerObserver = new ConsoleObserver('LoggerTurnos');
    this.subject.suscribir(loggerObserver);

    this.cargarTurnosDesdeArchivo();
  }

  cargarTurnosDesdeArchivo() {
    try {
      if (!fs.existsSync(RUTA_ARCHIVO)) {
        fs.writeFileSync(RUTA_ARCHIVO, JSON.stringify([], null, 2), 'utf-8');
      }
      const contenido = fs.readFileSync(RUTA_ARCHIVO, 'utf-8');
      this.turnos = JSON.parse(contenido);
      console.log('[TurnosFacade] Turnos cargados desde archivo:', this.turnos.length);
    } catch (error) {
      console.error('[TurnosFacade] Error al cargar turnos desde archivo:', error.message);
      this.turnos = [];
    }
  }

  guardarTurnosEnArchivo() {
    try {
      fs.writeFileSync(RUTA_ARCHIVO, JSON.stringify(this.turnos, null, 2), 'utf-8');
      console.log('[TurnosFacade] Turnos guardados en archivo.');
    } catch (error) {
      console.error('[TurnosFacade] Error al guardar turnos en archivo:', error.message);
    }
  }

  obtenerTurnos() {
    return this.turnos;
  }

  obtenerTurnoPorId(id) {
    return this.turnos.find((t) => t.id === Number(id));
  }

  crearTurno(data) {
    const turno = this.factory.crearTurno(data.tipo, data);
    this.turnos.push(turno);

    this.guardarTurnosEnArchivo();
    this.subject.notificar('TURNO_CREADO', turno);

    return turno;
  }

  actualizarTurno(id, data) {
    const index = this.turnos.findIndex((t) => t.id === Number(id));
    if (index === -1) {
      return null;
    }

    const turno = this.turnos[index];

    if (data.paciente !== undefined) turno.paciente = data.paciente;
    if (data.fecha !== undefined) turno.fecha = data.fecha;
    if (data.hora !== undefined) turno.hora = data.hora;

    this.turnos[index] = turno;

    this.guardarTurnosEnArchivo();
    this.subject.notificar('TURNO_ACTUALIZADO', turno);

    return turno;
  }

  eliminarTurno(id) {
    const turno = this.turnos.find((t) => t.id === Number(id));

    this.turnos = this.turnos.filter((t) => t.id !== Number(id));

    this.guardarTurnosEnArchivo();
    this.subject.notificar('TURNO_ELIMINADO', { id, turno });

    return true;
  }
}
