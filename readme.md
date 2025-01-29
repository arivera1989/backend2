# Proyecto Final

## Objetivos Generales
- Profesionalizar el servidor desarrollado en la primera preentrega.

## Objetivos Específicos
- Aplicar una arquitectura profesional para nuestro servidor.
- Implementar prácticas como patrones de diseño, mailing, variables de entorno, etc.

## Entregables

### 1. Capa de Persistencia
- Modificar la capa de persistencia para aplicar los conceptos de DAO (Data Access Object) y DTO (Data Transfer Object).

### 2. Patrón Repository
- Implementar el patrón Repository para trabajar con el DAO en la lógica de negocio.

### 3. Ruta `/current`
- Modificar la ruta `/current` para evitar enviar información sensible, enviando un DTO del usuario con solo la información necesaria.

### 4. Middleware de Autorización
- Crear un middleware que trabaje en conjunto con la estrategia "current" para gestionar la autorización y delimitar el acceso a los endpoints:
  - Solo el administrador puede crear, actualizar y eliminar productos.
  - Solo el usuario puede agregar productos a su carrito.

### 5. Modelo Ticket
- Crear un modelo `Ticket` que contará con las siguientes formalizaciones de la compra:
  - `id`: autogenerado por MongoDB.
  - `code`: String, debe autogenerarse y ser único.
  - `purchase_datetime`: debe guardar la fecha y hora exacta en la cual se formalizó la compra.
  - `amount`: Number, total de la compra.
  - `purchaser`: String, contendrá el correo del usuario asociado al carrito.

### 6. Ruta de Compra
- Implementar, en el router de `carts`, la ruta `/:cid/purchase`, que permitirá finalizar el proceso de compra del carrito:
  - Corroborar el stock del producto al momento de finalizarse.
  - Si el producto tiene suficiente stock, restarlo del stock y continuar.
  - Si no tiene suficiente stock, no agregar el producto al proceso de compra.

### 7. Generación de Tickets
- Utilizar el servicio de Tickets para generar un ticket con los datos de la compra.
- En caso de existir una compra no completada, devolver un arreglo con los IDs de los productos que no pudieron procesarse.
- Una vez finalizada la compra, el carrito asociado al usuario deberá contener solo los productos que no pudieron comprarse.

## Formato
- Link al repositorio de GitHub con el proyecto (sin `node_modules`).
- Archivo `.env` para poder correr el proyecto.

#### COMISION 70310
#### ALUMNO: ALEXIS RIVERA
#### PROF: JAIME NAHUEL RAMIREZ LORCA
