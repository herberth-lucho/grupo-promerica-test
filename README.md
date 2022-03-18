# grupo-promerica-test

Herberth Lucho

Para avanzar con el proceso a continuación comparto el detalle de los requerimientos de la prueba técnica.

 

Objetivo:

· Evaluar conocimientos en tecnología Angular utilizando Modulos, Componentes, Servicios.

· Evaluar estándares de programación en typeScript, uso de Metadata en angular y compartir informacion entre componentes.

· Evaluar el uso de patrones de diseño y mejores prácticas.

 

Detalle de actividades:

 

Con ayuda de JSON Server puede realizar los objetos JSON para trabajarlos en el frontEnd angular.

Instalacion via NPM: npm install json-server

 

Uso:

Se debe crear un archivo db.json y definir las estructuras de objeto.

Iniciar servicios, json-server --watch db.json

Ejemplo de estructura:

                {

                  "clientes":[

                   {

                                 "id":"1",

                                 "nombre": "",

                                 "apellidos": "Guardado"

                   }

                  ],

                  "ordenes":[

                   {

                                 "idProducto":"1",

                                 "idCliente":"1",

                                 "idOrden":"1",

                                 "cantidad":"1",

                                 "fecha": "Debora"

                   }

                  ],

                  "productos":[

                   {

                                 "id":"1",

                                 "nombre": "Debora",

                                 "descripcion": "Guardado",

                                 "precio": "10"

                   }

                  ]

                }

Endpoints:

                http://localhost:3000/clientes

                http://localhost:3000/ordenes

                http://localhost:3000/productos

1.  Realice un sitio donde posea las opciones (botones) listar/agregar cliente, listar/agregar productos, realizar orden.

                a. Cliente: Id, Nombres, Apellidos, Telefono, Correo, NIT.

                b. Orden: idProducto, idCliente, idOrden, Cantidad, Fecha.

                c. Producto: id, nombre, descripción, precio.

2. Cree un proyecto Angular con el siguiente ruteo.

                Home: http://mi-tienda/

 

                Clientes: http://mi-tienda/clientes/   (Mostrar tabla con los clientes obtenidos del servicio REST Metodo GET)

                                                 http://mi-tienda/clientes/agregar (Desde página de clientes redireccionar a pagina para poder agregar un cliente al servicio REST Metodo POST)

                                                 http://mi-tienda/clientes/mostrar/1 (Desde página de clientes redireccionar a pagina para visualizar seleccionado el cliente, compartir informacion de pagina clientes utilizando servicios).

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        

                Productos: http://mi-tienda/productos/   (Mostrar tabla con los productos obtenidos del servicio REST Metodo GET)

                                                  http://mi-tienda/productos/agregar (Desde página de productos redireccionar a pagina para poder agregar un producto al servicio REST Metodo POST).

                                                  http://mi-tienda/productos/mostrar/1 (Desde página de productos redireccionar a pagina para visualizar seleccionado el producto, compartir informacion de pagina productos utilizando servicios).

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        

                Ordenes: http://mi-tienda/crear-orden   (Mostrar página para registrar ordenes, todos los datos seran ingresados).

                                               http://mi-tienda/ordenes          (Mostrar ordenes registradas, REST Metodo GET).

                                                 

3. Utilizar Servicios para el manejo de la información.

4. Crear validaciones de campos requeridos para los ID's.

5. Incluir todas las validaciones necesarias en base al valor del campo (por ejemplo Validar que formatos sean correctos).

6. Hacer uso de formGroup/formArray.

7. Utilizar carga ademanda de componentes apartir de plantillas, no hacer uso "routing.module".

8. Sobreescribir comportamiento de asignacion de valores en formControl y mostrar en consola la asignacion del valor.

9. Hacer uso de implementación de cadenas de formularios y grupos de formularios.

10. Hacer uso de implementación de un escenario utilizando PIPE (Personalizado).

11. Hacer uso de implementación de un escenario utilizando DIRECTIVAS (Personalizado).

12. Hacer uso de herencias entre componentes.

13. Presentación de mensajes al usuario.

14. Versione el proyecto utilizando git.
