# LazyLoading

Este es un ejemplo practico, de como implementar lazy loading en angular correctamente.

### Reconstruir modulos

```
npm install
```

### Iniciar Server

```
ng serve -o
```

## ¿Que pasa cuando no implementas Lazy Loading?

<p style="text-align: justify;">
En una aplicacion de angular normalmente, cuando vas a comenzar a dividir tu aplicacion en modulos diferentes para cada tarea diferentes, lo importas en el ```app.module.ts```, hasta ahi todo normal, pero que pasaria si tu aplicacion es enorme y tiene miles de modulos, entonces apenas que tu aplicacion inicie que termine de carga en navegador, no importa en que ruta te encuentres se va a cargar toda esa logica de los modulos de tu aplicacion, por ejemplos que estes en la pagina de login, y al mismo tiempo te cargue la logica del registro, y te preguntaras ¿Porque, si aun no me encuentro en esa ruta?, esto pasaria si no implementas Lazy Loading
</p>

## ¿Porque implementar Lazy Loading en tu aplicacion?

<p style="text-align: justify;"> 
Implementando Lazy Loading le das a tu aplicacion un performance potente, ya que no estarias cargando todos tus modulos apenas inicie la aplicacion, si no que cargara los modulos dependiendo en la ruta que te encuentres, si estas en la ruta de login solo cargara el login modulo de login y si estas en la de registro solo cargara la de registro, ya que cuando tu aplicacion encuentre una ruta definida lo que va hacer es cargar un modulo al cual seleccionaste. Cuando usamos Lazy Loading hacemos llamado de un módulo mediante el sistema de rutas de Angular y este módulo a su vez tiene rutas hijas que se encargan de cargar el componente solicitado por el usuario.
</p>

## Caracteristicas de Lazy Loading

- Cada modulo debe tener su propio routing
- No tiene que importan su modulo en el `app.module.ts`, ya los modulos se cargaran dinamicamente en las rutas
