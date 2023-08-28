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