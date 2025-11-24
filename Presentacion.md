## 👥 Integrantes del Grupo
👩 Castro, Jennifer  
👨 Murinigo, Mariano Iván  
👨 Guardese, Iván  
👩 Gonzalez, Sofía  

El proyecto va a tratar sobre un sistema de gestión de turnos. 
Los patrones de diseño elegidos:

1) 🏭 Factory Method

Patrón creacional que define una interfaz para crear objetos, permitiendo que las subclases decidan qué tipo de objeto instanciar.

Los elegimos porque permite crear objetos sin acoplar el código cliente a clases concretas,facilita la escalabilidad cuando aparecen nuevos tipos de entidades.

En este proyecto, se puede usar para instanciar distintos tipos de turnos o usuarios sin modificar la lógica principal.

✔ ¿Cómo se usa en el proyecto?
TurnoFactory se encarga de crear instancias:

this.factory.crearTurno(tipo, data);


2) 👀 Observer

Patrón de comportamiento que establece una relación uno-a-muchos entre objetos: cuando uno cambia de estado, todos los demás son notificados automáticamente.

Lo elegimos ya que favorece la comunicación desacoplada entre componentes y es ideal para manejar eventos y notificaciones.

En este proyecto, se aplica para avisar a pacientes y administradores cuando un turno es creado, modificado o cancelado.

✔ ¿Cómo se usa en el proyecto?

TurnosFacade = Subject
ConsoleObserver = Observer

Cada cambio en el CRUD dispara un evento:

TURNO_CREADO
TURNO_ACTUALIZADO
TURNO_ELIMINADO


3) 🎭 Facade

Patrón estructural que proporciona una interfaz unificada y sencilla para acceder a un conjunto complejo de subsistemas.

Lo elegimos porque simplifica el uso de subsistemas complejos (BD, cache, servicios externos).Ademas,reduce el acoplamiento, ya que el cliente interactúa con una sola interfaz clara.

En este proyecto, actúa como punto de entrada para operaciones como crear turnos, cancelar turnos o gestionar pacientes, ocultando la complejidad interna.

✔ ¿Cómo se usa en el proyecto?

El controlador solo hace:

this.facade.crearTurno(data);
this.facade.eliminarTurno(id);
this.facade.actualizarTurno(id, body);
this.facade.obtenerTurnoPorId(id);


✅ Conclusión

🏭 Factory Method → simplifica la creación de objetos.

👀 Observer → gestiona eventos y notificaciones.

🎭 Facade → da una interfaz clara a sistemas complejos.


💾 Persistencia en Archivo JSON

El sistema guarda todos los turnos en:

📁 data/turnos.json

🌐 API REST — CRUD Completo

| Método | Ruta              | Función          |
| ------ | ----------------- | ---------------- |
| GET    | `/api/turnos`     | Listar todos     |
| GET    | `/api/turnos/:id` | Obtener por ID   |
| POST   | `/api/turnos`     | Crear turno      |
| PUT    | `/api/turnos/:id` | Actualizar turno |
| DELETE | `/api/turnos/:id` | Eliminar turno   |

🏁 Conclusión

El proyecto aplica tres patrones de diseño clave (Factory, Observer y Facade), implementa arquitectura en capas, CRUD completo, persistencia local y notificaciones internas.
Todas estas características permiten un sistema escalable, mantenible y listo para evolucionar a futuro.

