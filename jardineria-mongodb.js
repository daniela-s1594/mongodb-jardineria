use ('Jardineria');

db.oficina.insertMany([
    {
        'codigo_oficina':'BCN-ES',
        'ciudad':'Barcelona',
        'pais':'Espania',
        'region': 'Barcelona',
        'codigo_postal':'08019',
        'telefono': '+34 93 3561182',
        'linea_direccion1':'Avenida Diagonal, 38',
        'linea_direccion2':'3A escalera Derecha'
    },
    {
        'codigo_oficina':'BOS-USA',
        'ciudad':'Boston',
        'pais':'EEUU',
        'region': 'MA',
        'codigo_postal':'02108',
        'telefono':'+1 215 837 0825',
        'linea_direccion1':'1550 Court Place',
        'linea_direccion2':'Suite 102'
    },
    {
        'codigo_oficina':'LON-UK',
        'ciudad':'Londres',
        'pais':'Inglaterra',
        'region': 'EMEA',
        'codigo_postal':'EC2N 1HN',
        'telefono':'+44 20 78772041',
        'linea_direccion1':'52 Old Broad Street',
        'linea_direccion2':'Ground Floor'
    }
]);
db.oficina.find();