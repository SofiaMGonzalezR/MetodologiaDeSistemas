export class TurnoPresencial {
  constructor({ paciente, fecha, hora }) {
    this.id = Date.now();
    this.tipo = 'presencial';
    this.paciente = paciente;
    this.fecha = fecha;
    this.hora = hora;
  }
}

export class TurnoVirtual {
  constructor({ paciente, fecha, hora }) {
    this.id = Date.now();
    this.tipo = 'virtual';
    this.paciente = paciente;
    this.fecha = fecha;
    this.hora = hora;
  }
}
