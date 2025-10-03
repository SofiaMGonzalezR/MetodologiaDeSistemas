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

2) 👀 Observer

Patrón de comportamiento que establece una relación uno-a-muchos entre objetos: cuando uno cambia de estado, todos los demás son notificados automáticamente.

Lo elegimos ya que favorece la comunicación desacoplada entre componentes y es ideal para manejar eventos y notificaciones.

En este proyecto, se aplica para avisar a pacientes y administrador cuando un turno es creado, modificado o cancelado.

3) 🎭 Facade

Patrón estructural que proporciona una interfaz unificada y sencilla para acceder a un conjunto complejo de subsistemas.

Lo elegimos porque simplifica el uso de subsistemas complejos (BD, cache, servicios externos).Ademas,reduce el acoplamiento, ya que el cliente interactúa con una sola interfaz clara.

En este proyecto, actúa como punto de entrada para operaciones como crear turnos, cancelar turnos o gestionar pacientes, ocultando la complejidad interna.

✅ Conclusión

🏭 Factory Method → simplifica la creación de objetos.

👀 Observer → gestiona eventos y notificaciones.

🎭 Facade → da una interfaz clara a sistemas complejos.

