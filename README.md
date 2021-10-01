# NBA Players

### Configuración inicial 🔧

1. Realizar el fork del repositorio

2. Clonar el repositorio

3. Instalar npm modules
   ```bash
   npm install
   ```
4. Ejecutar servidor
   ```bash
   npm run start
   ```
5. Ir a **http://localhost:3000** para ver la pantalla inicial

## Documentación endpoint

Agregue aquí al documentación del endpoint elaborado.

Primero, en el controller en el método getPairsOfPlayers se obtiene el valor de la consulta (req.query.input); 
luego, se obtiene con fetch los datos del repositorio y así, ambas variables se pasan como parámetros a la función validateSum(), 
donde se crea matches (un arreglo de objetos) y se verifica para cada par de registros si la suma de sus edades es igual a 
la suma ingresada: de ser así, se guarda el registro dentro de matches. Una vez hecho esto, se retorna matches como results. 

Después, en el script se recibe el valor ingresado en el input y es pasado a getresults, el cual llama a una api con fetch, 
que infortunadamente, nunca se comprendió como funciona esta parte ni cómo conectarlo con el controller; no obstante, se cree que 
conecta con el router y éste a su vez llama al controlador. Los datos recuperados por este medio se revisan y, si el conjunto está vacío,
se envía un mensaje No matches found; de lo contrario, se borra el contenido de la tabla con removeAllChildNodes y se crea una nueva
mediante la función buildNewTable, que recibe cada objeto de los datos recogidos y con base en ellos crea un string que
posteriormente se utilizará para cambiar la estructura de tbody a través de innerHTML. 