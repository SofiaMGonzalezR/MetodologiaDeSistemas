  export class Subject {
  constructor() {
    this.observers = [];
  }

  suscribir(observer) {
    this.observers.push(observer);
  }

  desuscribir(observer) {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  notificar(evento, data) {
    this.observers.forEach((observer) => observer.actualizar(evento, data));
  }
}

export class ConsoleObserver {
  constructor(nombre = 'ObserverConsole') {
    this.nombre = nombre;
  }

  actualizar(evento, data) {
    console.log(`[${this.nombre}] Evento: ${evento}`, data);
  }
}
