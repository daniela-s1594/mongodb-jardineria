# mongodb-jardineria
 _Tips_
 1-Se usa el *use()* para usar la base de datos que queramos
 2-Para crear una coleccion(Tablas) usamos *createColletion()* y dentro de los parentesis escribimos el nombre de la base de datos a crear. Tambien usando solo el *db.nombreColeccion.InsertOne()* al llenar una coleccion que no existe mongodb lo crea inmediatamente e inserta la info que le damos.
 3-*insertOne()* inserta un documento(info/row/registro), mientras que el 
 *insertMany* inserta varios
 4-Para buscar/consultar documentos usamos *find()* para buscar todos o varios y para buscar solo uno *findOne()*
 5-para buscar unos datos especificos en los documentos usamos el *find()* pero lo usaremos así *find({Este campo escribe la condicion o lo que necesitas en especifico,ejemplo:departamento:'Choco',lo buscara en todos los documentos },{En este se colocan los datos que quieras que aparezcan . Ejemplo :telefono, pais:'Colombia'})*
 Algunas veces se usan numeros para el orden, ejemplo *find({},{codigo_oficina:1, ciudad:2, _id:0})* el 0 en el id es para que no lo muestre, el 1 y 2 es el orden en que quieres que aparezca.

