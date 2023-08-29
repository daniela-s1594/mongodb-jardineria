use('Jardineria');

db.oficina.insertMany([
    {
        'codigo_oficina': 'BCN-ES',
        'ciudad': 'Barcelona',
        'pais': 'Espania',
        'region': 'Barcelona',
        'codigo_postal': '08019',
        'telefono': '+34 93 3561182',
        'linea_direccion1': 'Avenida Diagonal, 38',
        'linea_direccion2': '3A escalera Derecha'
    },
    {
        'codigo_oficina': 'BOS-USA',
        'ciudad': 'Boston',
        'pais': 'EEUU',
        'region': 'MA',
        'codigo_postal': '02108',
        'telefono': '+1 215 837 0825',
        'linea_direccion1': '1550 Court Place',
        'linea_direccion2': 'Suite 102'
    },
    {
        'codigo_oficina': 'LON-UK',
        'ciudad': 'Londres',
        'pais': 'Inglaterra',
        'region': 'EMEA',
        'codigo_postal': 'EC2N 1HN',
        'telefono': '+44 20 78772041',
        'linea_direccion1': '52 Old Broad Street',
        'linea_direccion2': 'Ground Floor'
    },
    {
        'codigo_oficina': 'MAD-ES',
        'ciudad': 'Madrid',
        'pais': 'Espania',
        'region': 'Madrid',
        'codigo_postal': '28032',
        'telefono': '+34 91 7514487',
        'linea_direccion1': 'Bulevar Indalecio Prieto, 32',
        'linea_direccion2': ''
    },
    {
        'codigo_oficina': 'PAR-FR',
        'ciudad': 'Paris',
        'pais': 'Francia',
        'region': 'EMEA',
        'codigo_postal': '75017',
        'telefono': '+33 14 723 4404',
        'linea_direccion1': '29 Rue Jouffroy d abbans',
        'linea_direccion2': ''
    }
]);


db.oficina.find();

db.empleado.insertMany([
    {
        'codigo_empleado': 1,
        'nombre': 'Marcos',
        'apellido1': 'Magaña',
        'apellido2': 'Perez',
        'extension': '3897',
        'email': 'marcos@jardineria.es',
        'codigo_oficina': 'BCN-ES',
        'codigo_jefe': null,
        'puesto': 'Director General'
    },
    {
        'codigo_empleado': 2,
        'nombre': 'Ruben',
        'apellido1': 'López',
        'apellido2': 'Martinez',
        'extension': '2899',
        'email': 'rlopez@jardineria.es',
        'codigo_oficina': 'BCN-ES',
        'codigo_jefe': 1,
        'puesto': 'Subdirector Marketing'
    },
    {
        'codigo_empleado': 3,
        'nombre': 'Alberto',
        'apellido1': 'Soria',
        'apellido2': 'Carrasco',
        'extension': '2837',
        'email': 'asoria@jardineria.es',
        'codigo_oficina': 'BCN-ES',
        'codigo_jefe': 2,
        'puesto': 'Subdirector Ventas'
    },
    {
        'codigo_empleado': 4,
        'nombre': 'Maria',
        'apellido1': 'Solís',
        'apellido2': 'Jerez',
        'extension': '2847',
        'email': 'msolis@jardineria.es',
        'codigo_oficina': 'BCN-ES',
        'codigo_jefe': 2,
        'puesto': 'Secretaria'
    },
    {
        'codigo_empleado': 5,
        'nombre': 'Felipe',
        'apellido1': 'Rosas',
        'apellido2': 'Marquez',
        'extension': '2844',
        'email': 'frosas@jardineria.es',
        'codigo_oficina': 'BCN-ES',
        'codigo_jefe': 3,
        'puesto': 'Representante Ventas'
    }
]);
db.empleado.find();

db.gama_producto.insertMany([
    {
        'gama': 'Herbaceas',
        'descripcion_texto': 'Plantas para jardin decorativas',
        'descripcion_html': null,
        'imagen': null
    },
    {
        'gama': 'Herramientas',
        'descripcion_texto': 'Herramientas para todo tipo de acción',
        'descripcion_html': null,
        'imagen': null
    },
    {
        'gama': 'Aromáticas',
        'descripcion_texto': 'Plantas aromáticas',
        'descripcion_html': null,
        'imagen': null
    },
    {
        'gama': 'Frutales',
        'descripcion_texto': 'Árboles pequeños de producción frutal',
        'descripcion_html': null,
        'imagen': null
    },
    {
        'gama': 'Ornamentales',
        'descripcion_texto': 'Plantas vistosas para la decoración del jardín',
        'descripcion_html': null,
        'imagen': null
    }
])
db.gama_producto.find();

db.cliente.insertMany([
    {
        'codigo_cliente': 1,
        'nombre_cliente': 'GoldFish Garden',
        'nombre_contacto': 'Daniel G',
        'apellido_contacto': 'GoldFish',
        'telefono': '5556901745',
        'fax': '5556901746',
        'linea_direccion1': 'False Street 52 2 A',
        'linea_direccion2': null,
        'ciudad': 'San Francisco',
        'region': null,
        'pais': 'USA',
        'codigo_postal': '24006',
        'codigo_empleado_rep_ventas': 19,
        'limite_credito': 3000
    },
    {
        'codigo_cliente': 3,
        'nombre_cliente': 'Gardening Associates',
        'nombre_contacto': 'Anne',
        'apellido_contacto': 'Wright',
        'telefono': '5557410345',
        'fax': '5557410346',
        'linea_direccion1': 'Wall-e Avenue',
        'linea_direccion2': null,
        'ciudad': 'Miami',
        'region': 'Miami',
        'pais': 'USA',
        'codigo_postal': '24010',
        'codigo_empleado_rep_ventas': 19,
        'limite_credito': 6000
    },
    {
        'codigo_cliente': 4,
        'nombre_cliente': 'Gerudo Valley',
        'nombre_contacto': 'Link',
        'apellido_contacto': 'Flaute',
        'telefono': '5552323129',
        'fax': '5552323128',
        'linea_direccion1': 'Oaks Avenue nº22',
        'linea_direccion2': null,
        'ciudad': 'New York',
        'region': null,
        'pais': 'USA',
        'codigo_postal': '85495',
        'codigo_empleado_rep_ventas': 22,
        'limite_credito': 12000
    },
    {
        'codigo_cliente': 5,
        'nombre_cliente': 'Tendo Garden',
        'nombre_contacto': 'Akane',
        'apellido_contacto': 'Tendo',
        'telefono': '55591233210',
        'fax': '55591233211',
        'linea_direccion1': 'Oaks Avenue nº22',
        'linea_direccion2': 'Null Street nº69',
        'ciudad': 'Miami',
        'region': null,
        'pais': 'USA',
        'codigo_postal': '696969',
        'codigo_empleado_rep_ventas': 22,
        'limite_credito': 600000
    },
    {
        'codigo_cliente': 5,
        'nombre_cliente': 'Lasas S.A',
        'nombre_contacto': 'Antonio',
        'apellido_contacto': 'Lasas',
        'telefono': '34916540145',
        'fax': '34914851312',
        'linea_direccion1': 'C/Leganes 15',
        'linea_direccion2': null,
        'ciudad': 'Fuenlabrada',
        'region': 'Madrid',
        'pais': 'Spain',
        'codigo_postal': '28945',
        'codigo_empleado_rep_ventas': 8,
        'limite_credito': 154310
    }
])
db.cliente.find()

db.pedido.insertMany([
    {
        'codigo_pedido': 1,
        'fecha_pedido': ISODate('2006-01-17'),
        'fecha_esperada': ISODate('2006-01-19'),
        'fecha_entrega': ISODate('2006-01-19'),
        'estado': 'Entregado',
        'comentarios': 'Pagado a plazos',
        'codigo_cliente': 5
    },
    {
        'codigo_pedido': 2,
        'fecha_pedido': ISODate('2007-10-23'),
        'fecha_esperada': ISODate('2007-10-28'),
        'fecha_entrega': ISODate('2007-10-26'),
        'estado': 'Entregado',
        'comentarios': 'La entrega llego antes de lo esperado',
        'codigo_cliente': 5
    },
    {
        'codigo_pedido': 3,
        'fecha_pedido': ISODate('2008-06-20'),
        'fecha_esperada': ISODate('2008-06-25'),
        'fecha_entrega': null,
        'estado': 'Rechazado',
        'comentarios': 'Limite de credito superado',
        'codigo_cliente': 5
    },
    {
        'codigo_pedido': 4,
        'fecha_pedido': ISODate('2009-01-20'),
        'fecha_esperada': ISODate('2009-01-26'),
        'fecha_entrega': null,
        'estado': 'Pendiente',
        'comentarios': null,
        'codigo_cliente': 5
    },
    {
        'codigo_pedido': 8,
        'fecha_pedido': ISODate('2008-11-09'),
        'fecha_esperada': ISODate('2008-11-14'),
        'fecha_entrega': ISODate('2008-11-14'),
        'estado': 'Entregado',
        'comentarios': 'El cliente paga la mitad con tarjeta y la otra mitad con efectivo, se le realizan dos facturas',
        'codigo_cliente': 1
    }
])

db.pedido.find();

db.producto.insertMany([
    {
        'codigo_producto': '11679',
        'nombre': 'Sierra de Poda 400MM',
        'gama': 'Herramientas',
        'dimensiones': '0,258',
        'proveedor': 'HiperGarden Tools',
        'descripcion': 'Gracias a la poda se consigue manipular un poco la naturaleza, dándole la forma que más nos guste. Este trabajo básico de jardinería también facilita que las plantas crezcan de un modo más equilibrado, y que las flores y los frutos vuelvan cada año con regularidad. Lo mejor es dar forma cuando los ejemplares son jóvenes, de modo que exijan pocos cuidados cuando sean adultos. Además de saber cuándo y cómo hay que podar, tener unas herramientas adecuadas para esta labor es también de vital importancia.',
        'cantidad_en_stock': 15,
        'precio_venta': 14,
        'precio_proveedor': 11
    },
    {
        'codigo_producto': '21636',
        'nombre': 'Pala',
        'gama': 'Herramientas',
        'dimensiones': '0,156',
        'proveedor': 'HiperGarden Tools',
        'descripcion': 'Palas de acero con cresta de corte en la punta para cortar bien el terreno. Buena penetración en tierras muy compactas.',
        'cantidad_en_stock': 15,
        'precio_venta': 14,
        'precio_proveedor': 13
    },
    {
        'codigo_producto': '22225',
        'nombre': 'Rastrillo de Jardín',
        'gama': 'Herramientas',
        'dimensiones': '1,064',
        'proveedor': 'HiperGarden Tools',
        'descripcion': 'Fabuloso rastillo que le ayudará a eliminar piedras, hojas, ramas y otros elementos incómodos en su jardín.',
        'cantidad_en_stock': 15,
        'precio_venta': 12,
        'precio_proveedor': 11
    },
    {
        'codigo_producto': '30310',
        'nombre': 'Azadón',
        'gama': 'Herramientas',
        'dimensiones': '0,168',
        'proveedor': 'HiperGarden Tools',
        'descripcion': 'Longitud:24cm. Herramienta fabricada en acero y pintura epoxi,alargando su durabilidad y preveniendo la corrosión.Diseño pensado para el ahorro de trabajo.',
        'cantidad_en_stock': 15,
        'precio_venta': 12,
        'precio_proveedor': 11
    },
    {
        'codigo_producto': 'AR-001',
        'nombre': 'Ajedrea',
        'gama': 'Aromáticas',
        'dimensiones': '15-20',
        'proveedor': 'Murcia Seasons',
        'descripcion': 'Planta aromática que fresca se utiliza para condimentar carnes y ensaladas, y seca, para pastas, sopas y guisantes.',
        'cantidad_en_stock': 140,
        'precio_venta': 1,
        'precio_proveedor': 0
    }
])
db.producto.find();

db.detalle_pedido.insertMany([
    {
        'codigo_pedido': 1,
        'codigo_producto': '11679',
        'cantidad': 10,
        'precio_unidad': 70,
        'numero_linea': 3
    },
    {
        'codigo_pedido': 2,
        'codigo_producto': '21636',
        'cantidad': 10,
        'precio_unidad': 70,
        'numero_linea': 1
    },
    {
        'codigo_pedido': 3,
        'codigo_producto': '22225',
        'cantidad': 10,
        'precio_unidad': 70,
        'numero_linea': 2
    },
    {
        'codigo_pedido': 4,
        'codigo_producto': '30310',
        'cantidad': 10,
        'precio_unidad': 70,
        'numero_linea': 4
    },
    {
        'codigo_pedido': 8,
        'codigo_producto': 'AR-001',
        'cantidad': 10,
        'precio_unidad': 70,
        'numero_linea': 5
    }
])
db.detalle_pedido.find();

db.pago.insertMany([
    {
        'codigo_cliente': 1,
        'forma_pago': 'PayPal',
        'id_transaccion': 'ak-std-000001',
        'fecha_pago': ISODate('2008-11-10'),
        'total': 2000
    },
    {
        'codigo_cliente': 1,
        'forma_pago': 'PayPal',
        'id_transaccion': 'ak-std-000002',
        'fecha_pago': ISODate('2008-12-10'),
        'total': 2000
    },
    {
        'codigo_cliente': 3,
        'forma_pago': 'PayPal',
        'id_transaccion': 'ak-std-000003',
        'fecha_pago': ISODate('2009-01-16'),
        'total': 5000
    },
    {
        'codigo_cliente': 3,
        'forma_pago': 'PayPal',
        'id_transaccion': 'ak-std-000004',
        'fecha_pago': ISODate('2009-02-16'),
        'total': 5000
    },
    {
        'codigo_cliente': 3,
        'forma_pago': 'PayPal',
        'id_transaccion': 'ak-std-000005',
        'fecha_pago': ISODate('2009-02-19'),
        'total': 926
    }
])
db.pago.find();