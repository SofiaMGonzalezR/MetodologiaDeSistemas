# Sistema de Gestión de Turnos – Metodología de Sistemas II

## 👥 Integrantes del Grupo
👩 Castro, Jennifer  
👨 Murinigo, Mariano Iván  
👨 Guardese, Iván  
👩 Gonzalez, Sofía  

## Descripción
Este proyecto consiste en un sistema simple de gestión de turnos, desarrollado como trabajo práctico para la materia Metodología de Sitemas II.

Incluye:
- API REST construida con **Node.js + Express**
- Persistencia en archivo `turnos.json`
- Patrón **Factory** para crear turnos
- Patrón **Observer** para notificar cambios
- Patrón **Facade** para simplificar la lógica del sistema
- Frontend estático (HTML, CSS, JS) integrado en `/public`
- CRUD completo de turnos (crear, listar, editar, eliminar)

## Tecnologías utilizadas
# Backend
- Node.js
- Express
- ES Modules
- File System (fs)
- Patrones de diseño (Factory, Observer, Facade)

# Frontend
- HTML5
- CSS3
- Vanilla JavaScript
- Bootstrap 5


A continuación, una explicación de los patrones de diseño elegidos:

1) 🏭 Factory Method

Este patrón creacional define una interfaz para crear objetos, permitiendo que las subclases decidan qué tipo de objeto instanciar. Lo elegimos porque permite crear objetos sin acoplar el código cliente a clases concretas y facilita la escalabilidad cuando aparecen nuevos tipos de entidades.

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


## ✅ Conclusión

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


## 🖥️ Desarrollo del Frontend
Además del backend y los patrones de diseño solicitados, el proyecto incorpora un **frontend propio** desarrollado por el grupo para permitir la interacción completa con el sistema desde el navegador.

## ✨ Características implementadas

✔ **Interfaz web completa** construida con  
   - HTML5  
   - CSS3  
   - JavaScript vanilla  
   - Bootstrap 5 para mejorar el diseño
✔ **CRUD visual de turnos totalmente funcional**, conectado a la API REST.
✔ **Formulario para crear turnos**, con los campos:
    - Tipo de turno (Presencial o Virtual)
    - Paciente
    - Fecha
    - Hora
✔ **Listado dinámico de turnos**, obtenido en vivo desde `/api/turnos`.
✔ **Edición en línea**: cada turno puede modificarse directamente en la tabla.
✔ **Eliminación de turnos** con un clic desde la misma interfaz.
✔ **Alertas visuales con Bootstrap**:
    - "Turno creado"
    - "Turno actualizado"
    - "Turno eliminado"
✔ **Validación básica en el formulario** para evitar envíos incompletos.

### 📂 Ubicación del frontend
El frontend se encuentra dentro de la carpeta:
/public
│── app.js → Lógica y conexión con la API REST
│── index.html → Estructura visual
└── style.css → Estilos personalizados


## 🔌 Integración con el servidor
Se habilitó el siguiente middleware en `app.js` para permitir servir el frontend directamente desde Express:

```js
app.use(express.static("public"));
```
De esta manera, al iniciar el servidor, la aplicación completa (frontend + backend) queda disponible en:
http://localhost:3000


## 🏁 Conclusión

El proyecto integra correctamente los patrones Factory, Observer y Facade dentro de una arquitectura en capas, logrando un CRUD funcional con persistencia local y notificaciones internas. A esto se suma un frontend sencillo y eficiente que permite gestionar turnos de forma completa desde el navegador.
En conjunto, la solución final es clara, mantenible y demostrable, cumpliendo lo planeado y dejando una base sólida a la par que versatil para futuras mejoras o implementaciones.
=======
# MetodologiaDeSistemas
>>>>>>> d83c8bc9d4ddb465670c7e734d1b5ce6f851546b
