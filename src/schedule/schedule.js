import { colorAqua, colorBlue, colorGreen, colorOrange, colorPink, colorPurple, colorRed, colorYellow } from "../constants/constants";

export const scheduleInf = [
    {
        "id": 1,
        "name": "Gestión de proyectos informáticos",
        "alias": "Feria 1",
        "hours": [
            {
                "day": "Jueves",
                "block": "3-4"
            },
            {
                "day": "Jueves",
                "block": "5-6"
            }
        ],
        "teacher": "Lioubov Dombrovskaia",
        "number": 200, 
        "credits": 5,
        "color": colorRed
    },
    {
        "id": 2,
        "name": "Gestión de proyectos informáticos",
        "alias": "Feria 1",
        "hours": [
            {
                "day": "Jueves",
                "block": "3-4"
            },
            {
                "day": "Jueves",
                "block": "5-6"
            }
        ],
        "teacher": "Cristian Correa",
        "number": 201, 
        "credits": 5,
        "color": colorRed
    },
    {
        "id": 3,
        "name": "Bases de datos",
        "alias": "BD",
        "hours": [
            {
                "day": "Miercoles",
                "block": "7-8"
            },
            {
                "day": "Miercoles",
                "block": "13-14"
            }
        ],
        "teacher": "Ricardo Salas",
        "number": 200, 
        "credits": 5,
        "color": colorYellow
    },
    {
        "id": 4,
        "name": "Bases de datos",
        "alias": "BD",
        "hours": [
            {
                "day": "Martes",
                "block": "13-14"
            },
            {
                "day": "Miercoles",
                "block": "13-14"
            }
        ],
        "teacher": "Rodrigo Olavarria",
        "number": 201, 
        "credits": 5,
        "color": colorYellow
    },
    {
        "id": 5,
        "name": "Arquitectura y organización de computadores",
        "alias": "Arqui",
        "hours": [
            {
                "day": "Martes",
                "block": "3-4"
            },
            {
                "day": "Jueves",
                "block": "3-4"
            }
        ],
        "teacher": "Viktor Tapia",
        "number": 200, 
        "credits": 5,
        "color": colorPurple
    },
    {
        "id": 6,
        "name": "Arquitectura y organización de computadores",
        "alias": "Arqui",
        "hours": [
            {
                "day": "Martes",
                "block": "3-4"
            },
            {
                "day": "Miercoles",
                "block": "3-4"
            }
        ],
        "teacher": "Mauricio Solar",
        "number": 201, 
        "credits": 5,
        "color": colorPurple
    },
    {
        "id": 8,
        "name": "Análisis y diseño de software",
        "alias": "Anal",
        "hours": [
            {
                "day": "Martes",
                "block": "1-2"
            },
            {
                "day": "Martes",
                "block": "5-6"
            }
        ],
        "teacher": "Juan Jerez",
        "number": 200, 
        "credits": 5,
        "color": colorYellow
    },
    {
        "id": 9,
        "name": "Análisis y diseño de software",
        "alias": "Anal",
        "hours": [
            {
                "day": "Martes",
                "block": "5-6"
            },
            {
                "day": "Jueves",
                "block": "13-14"
            }
        ],
        "teacher": "Jose Luis Marti (*)",
        "number": 201, 
        "credits": 5,
        "color": colorYellow
    },
    {
        "id": 10,
        "name": "Algoritmos y complejidad",
        "alias": "Algoco",
        "hours": [
            {
                "day": "Lunes",
                "block": "7-8"
            },
            {
                "day": "Martes",
                "block": "11-12"
            }
        ],
        "teacher": "Diego Arroyuelo",
        "number": 200, 
        "credits": 5,
        "color": colorBlue 
    },
    {
        "id": 11,
        "name": "Ingeniería, informática y sociedad",
        "alias": "Infosoc",
        "hours": [
            {
                "day": "Jueves",
                "block": "9-10"
            },
            {
                "day": "Jueves",
                "block": "11-12"
            }
        ],
        "teacher": "Jose Lino Contreras",
        "number": 200, 
        "credits": 5,
        "color": colorPink
    },
    {
        "id": 12,
        "name": "Estadística computacional",
        "alias": "Estaca",
        "hours": [
            {
                "day": "Martes",
                "block": "11-12"
            },
            {
                "day": "Jueves",
                "block": "11-12"
            }
        ],
        "teacher": "Ricardo Nanculef",
        "number": 200, 
        "credits": 5,
        "color": colorGreen
    },
    {
        "id": 13,
        "name": "Estadística computacional",
        "alias": "Estaca",
        "hours": [
            {
                "day": "Martes",
                "block": "13-14"
            },
            {
                "day": "Jueves",
                "block": "13-14"
            }
        ],
        "teacher": "Manuel Goyo",
        "number": 201, 
        "credits": 5,
        "color": colorGreen
    },
    {
        "id": 14,
        "name": "Información y matemática financiera",
        "alias": "IMAFI",
        "hours": [
            {
                "day": "Viernes",
                "block": "11-12"
            },
            {
                "day": "Viernes",
                "block": "13-14"
            }
        ],
        "teacher": "Emilio Rojas",
        "number": 200, 
        "credits": 5,
        "color": colorAqua
    },
    {
        "id": 15,
        "name": "Información y matemática financiera",
        "alias": "IMAFI",
        "hours": [
            {
                "day": "Jueves",
                "block": "13-14"
            },
            {
                "day": "Jueves",
                "block": "15-16"
            }
        ],
        "teacher": "Claudio Mena",
        "number": 201, 
        "credits": 5,
        "color": colorAqua
    },
    {
        "id": 16,
        "name": "Calidad y productividad de software",
        "alias": "Calidad",
        "hours": [
            {
                "day": "Viernes",
                "block": "11-12"
            },
            {
                "day": "Viernes",
                "block": "13-14"
            }
        ],
        "teacher": "Marcello Visconti",
        "number": 200, 
        "credits": 5,
        "color": colorOrange
    },
    {
        "id": 17,
        "name": "Computacion grafica",
        "alias": "CompGraf",
        "hours": [
            {
                "day": "Lunes",
                "block": "11-12"
            },
            {
                "day": "Miercoles",
                "block": "11-12"
            }
        ],
        "teacher": "Claudio Lobos",
        "number": 200, 
        "credits": 5,
        "color": colorOrange
    },
    {
        "id": 18,
        "name": "Computación científica",
        "alias": "CC",
        "hours": [
            {
                "day": "Martes",
                "block": "9-10"
            },
            {
                "day": "Martes",
                "block": "11-12"
            }
        ],
        "teacher": "Roberto Leon",
        "number": 200, 
        "credits": 5,
        "color": colorGreen
    },
    {
        "id": 19,
        "name": "Computación científica",
        "alias": "CC",
        "hours": [
            {
                "day": "Martes",
                "block": "3-4"
            },
            {
                "day": "Martes",
                "block": "5-6"
            }
        ],
        "teacher": "Roberto Leon",
        "number": 201, 
        "credits": 5,
        "color": colorGreen
    },
    {
        "id": 20,
        "name": "Estructuras de datos",
        "alias": "EDD",
        "hours": [
            {
                "day": "Lunes",
                "block": "9-10"
            },
            {
                "day": "Martes",
                "block": "9-10"
            }
        ],
        "teacher": "Gabriel Carmona",
        "number": 200, 
        "credits": 5,
        "color": colorBlue
    },
    {
        "id": 21,
        "name": "Estructuras de datos",
        "alias": "EDD",
        "hours": [
            {
                "day": "Lunes",
                "block": "11-12"
            },
            {
                "day": "Martes",
                "block": "11-12"
            }
        ],
        "teacher": "Juan Pablo Castillo",
        "number": 201, 
        "credits": 5,
        "color": colorBlue
    },
    {
        "id": 22,
        "name": "Estructuras de datos",
        "alias": "EDD",
        "hours": [
            {
                "day": "Lunes",
                "block": "13-14"
            },
            {
                "day": "Martes",
                "block": "13-14"
            }
        ],
        "teacher": "Roberto Diaz",
        "number": 202, 
        "credits": 5,
        "color": colorBlue
    },
    {
        "id": 23,
        "name": "Estructuras Discretas",
        "alias": "Discretas",
        "hours": [
            {
                "day": "Lunes",
                "block": "7-8"
            },
            {
                "day": "Miercoles",
                "block": "7-8"
            }
        ],
        "teacher": "Claudio Lobos",
        "number": 200, 
        "credits": 5,
        "color": colorBlue
    },
    {
        "id": 24,
        "name": "Estructuras Discretas",
        "alias": "Discretas",
        "hours": [
            {
                "day": "Jueves",
                "block": "13-14"
            },
            {
                "day": "Viernes",
                "block": "9-10"
            }
        ],
        "teacher": "Cristopher Arenas",
        "number": 201, 
        "credits": 5,
        "color": colorBlue
    },
    {
        "id": 25,
        "name": "Estructuras Discretas",
        "alias": "Discretas",
        "hours": [
            {
                "day": "Lunes",
                "block": "7-8"
            },
            {
                "day": "Miercoles",
                "block": "7-8"
            }
        ],
        "teacher": "Maria Paz Vergara",
        "number": 202, 
        "credits": 5,
        "color": colorBlue
    },
    {
        "id": 26,
        "name": "Estructuras Discretas",
        "alias": "Discretas",
        "hours": [
            {
                "day": "Lunes",
                "block": "5-6"
            },
            {
                "day": "Miercoles",
                "block": "5-6"
            }
        ],
        "teacher": "Maria Paz Vergara",
        "number": 203, 
        "credits": 5,
        "color": colorBlue
    },
    {
        "id": 27,
        "name": "Informática teórica",
        "alias": "TALF",
        "hours": [
            {
                "day": "Lunes",
                "block": "5-6"
            },
            {
                "day": "Miercoles",
                "block": "5-6"
            }
        ],
        "teacher": "Andres Moreira",
        "number": 200, 
        "credits": 5,
        "color": colorBlue
    },
    {
        "id": 28,
        "name": "Ingeniería de software",
        "alias": "ISW",
        "hours": [
            {
                "day": "Miercoles",
                "block": "9-10"
            },
            {
                "day": "Jueves",
                "block": "5-6"
            }
        ],
        "teacher": "Iván Zuñiga",
        "number": 200, 
        "credits": 5,
        "color": colorYellow
    },
    {
        "id": 29,
        "name": "Ingeniería de software",
        "alias": "ISW",
        "hours": [
            {
                "day": "Miercoles",
                "block": "9-10"
            },
            {
                "day": "Jueves",
                "block": "5-6"
            }
        ],
        "teacher": "Ricardo Salas",
        "number": 201, 
        "credits": 5,
        "color": colorYellow
    },
    {
        "id": 30,
        "name": "Innovacion tecnologica",
        "alias": "InvTec",
        "hours": [
            {
                "day": "Lunes",
                "block": "11-12"
            },
            {
                "day": "Lunes",
                "block": "13-14"
            }
        ],
        "teacher": "Luis Ramirez",
        "number": 200, 
        "credits": 5,
        "color": colorOrange
    },
    {
        "id": 31,
        "name": "Inteligencia artificial",
        "alias": "IA",
        "hours": [
            {
                "day": "Lunes",
                "block": "5-6"
            },
            {
                "day": "Lunes",
                "block": "7-8"
            }
        ],
        "teacher": "Nicolas Rojas",
        "number": 200, 
        "credits": 5,
        "color": colorGreen
    },
    {
        "id": 32,
        "name": "Introducción a la ciencia de datos",
        "alias": "IntroDataSci",
        "hours": [
            {
                "day": "Miercoles",
                "block": "11-12"
            },
            {
                "day": "Miercoles",
                "block": "13-14"
            }
        ],
        "teacher": "Ignacio Loayza",
        "number": 200, 
        "credits": 5,
        "color": colorOrange
    },
    {
        "id": 33,
        "name": "Introducción a las redes neuronales artificiales and deep learning",
        "alias": "RedesNeuronales",
        "hours": [
            {
                "day": "Viernes",
                "block": "9-10"
            },
            {
                "day": "Viernes",
                "block": "11-12"
            }
        ],
        "teacher": "Ricardo Nanculef",
        "number": 200, 
        "credits": 5,
        "color": colorOrange
    },
    {
        "id": 34,
        "name": "Investigación de operaciones",
        "alias": "IO",
        "hours": [
            {
                "day": "Lunes",
                "block": "9-10"
            },
            {
                "day": "Lunes",
                "block": "11-12"
            }
        ],
        "teacher": "Nicolas Rojas",
        "number": 200, 
        "credits": 5,
        "color": colorRed
    },
    {
        "id": 35,
        "name": "Investigación de operaciones",
        "alias": "IO",
        "hours": [
            {
                "day": "Jueves",
                "block": "9-10"
            },
            {
                "day": "Jueves",
                "block": "11-12"
            }
        ],
        "teacher": "Nicolas Rojas",
        "number": 201, 
        "credits": 5,
        "color": colorRed
    },
    {
        "id": 36,
        "name": "Lenguajes de programación",
        "alias": "LP",
        "hours": [
            {
                "day": "Lunes",
                "block": "9-10"
            },
            {
                "day": "Miercoles",
                "block": "9-10"
            }
        ],
        "teacher": "Jose Luis Marti",
        "number": 200, 
        "credits": 5,
        "color": colorBlue
    },
    {
        "id": 37,
        "name": "Lenguajes de programación",
        "alias": "LP",
        "hours": [
            {
                "day": "Jueves",
                "block": "5-6"
            },
            {
                "day": "Viernes",
                "block": "5-6"
            }
        ],
        "teacher": "Jorge Diaz",
        "number": 200, 
        "credits": 5,
        "color": colorBlue
    },
    {
        "id": 38,
        "name": "Metodologia de la investigacion",
        "alias": "MIT",
        "hours": [
            {
                "day": "Martes",
                "block": "5-6"
            }
        ],
        "teacher": "Hernan Astudillo",
        "number": 200, 
        "credits": 7,
        "color": colorOrange
    },
    {
        "id": 39,
        "name": "Organizaciones y sistemas de información",
        "alias": "OSI",
        "hours": [
            {
                "day": "Lunes",
                "block": "9-10"
            },
            {
                "day": "Lunes",
                "block": "11-12"
            }
        ],
        "teacher": "Ana Muñoz",
        "number": 200, 
        "credits": 5,
        "color": colorRed
    },
    {
        "id": 40,
        "name": "Organizaciones y sistemas de información",
        "alias": "OSI",
        "hours": [
            {
                "day": "Miercoles",
                "block": "9-10"
            },
            {
                "day": "Miercoles",
                "block": "11-12"
            }
        ],
        "teacher": "Ana Muñoz",
        "number": 201, 
        "credits": 5,
        "color": colorRed
    },
    {
        "id": 41,
        "name": "Proceso de creación de videojuegos",
        "alias": "Videojuego",
        "hours": [
            {
                "day": "Lunes",
                "block": "9-10"
            },
            {
                "day": "Lunes",
                "block": "11-12"
            }
        ],
        "teacher": "Jose Luis Marti (*)",
        "number": 200, 
        "credits": 5,
        "color": colorOrange
    },
    {
        "id": 42,
        "name": "Redes complejas",
        "alias": "RC",
        "hours": [
            {
                "day": "Lunes",
                "block": "9-10"
            },
            {
                "day": "Lunes",
                "block": "11-12"
            }
        ],
        "teacher": "Andres Moreira",
        "number": 200, 
        "credits": 5,
        "color": colorOrange
    },
    {
        "id": 43,
        "name": "Redes de Computadores",
        "alias": "Redes",
        "hours": [
            {
                "day": "Lunes",
                "block": "1-2"
            },
            {
                "day": "Miercoles",
                "block": "1-2"
            }
        ],
        "teacher": "Jorge Diaz",
        "number": 200, 
        "credits": 5,
        "color": colorPurple
    },
    {
        "id": 44,
        "name": "Redes de Computadores",
        "alias": "Redes",
        "hours": [
            {
                "day": "Martes",
                "block": "1-2"
            },
            {
                "day": "Jueves",
                "block": "1-2"
            }
        ],
        "teacher": "Jorge Diaz",
        "number": 201, 
        "credits": 5,
        "color": colorPurple
    },
    {
        "id": 47,
        "name": "Sistemas Operativos",
        "alias": "SO",
        "hours": [
            {
                "day": "Lunes",
                "block": "13-14"
            },
            {
                "day": "Miercoles",
                "block": "13-14"
            }
        ],
        "teacher": "Viktor Tapia",
        "number": 200, 
        "credits": 5,
        "color": colorPurple
    },
    {
        "id": 48,
        "name": "Taller criptografia aplicada",
        "alias": "Cripto",
        "hours": [
            {
                "day": "Lunes",
                "block": "11-12"
            },
            {
                "day": "Lunes",
                "block": "13-14"
            }
        ],
        "teacher": "Jaime Gomez",
        "number": 200, 
        "credits": 7,
        "color": colorOrange
    },
    {
        "id": 49,
        "name": "Taller de herramientas de modelado de procesos de negocios",
        "alias": "BPMN",
        "hours": [
            {
                "day": "Jueves",
                "block": "9-10"
            },
            {
                "day": "Jueves",
                "block": "11-12"
            }
        ],
        "teacher": "Mauricio Olivares",
        "number": 200, 
        "credits": 7,
        "color": colorOrange
    },
    {
        "id": 50,
        "name": "Taller de programación",
        "alias": "TProgra",
        "hours": [
            {
                "day": "Martes",
                "block": "11-12"
            },
            {
                "day": "Martes",
                "block": "13-14"
            }
        ],
        "teacher": "Ernesto Vivanco",
        "number": 200, 
        "credits": 5,
        "color": colorOrange
    },
    {
        "id": 51,
        "name": "Taller de redes de computadores",
        "alias": "TRedes",
        "hours": [
            {
                "day": "Viernes",
                "block": "9-10"
            },
            {
                "day": "Viernes",
                "block": "11-12"
            }
        ],
        "teacher": "Rodrigo Diaz",
        "number": 200, 
        "credits": 5,
        "color": colorOrange
    },
    {
        "id": 52,
        "name": "Teoría de sistemas",
        "alias": "TeoSis",
        "hours": [
            {
                "day": "Jueves",
                "block": "3-4"
            },
            {
                "day": "Jueves",
                "block": "5-6"
            }
        ],
        "teacher": "Dayana Carrillo",
        "number": 200, 
        "credits": 5,
        "color": colorRed
    },
    {
        "id": 53,
        "name": "Teoría de sistemas",
        "alias": "TeoSis",
        "hours": [
            {
                "day": "Jueves",
                "block": "9-10"
            },
            {
                "day": "Jueves",
                "block": "11-12"
            }
        ],
        "teacher": "Dayana Carrillo",
        "number": 201, 
        "credits": 5,
        "color": colorRed
    },
    {
        "id": 54,
        "name": "Teoría de sistemas",
        "alias": "TeoSis",
        "hours": [
            {
                "day": "Miercoles",
                "block": "11-12"
            },
            {
                "day": "Miercoles",
                "block": "13-14"
            }
        ],
        "teacher": "Dayana Carrillo",
        "number": 202, 
        "credits": 5,
        "color": colorRed
    },
    {
        "id": 55,
        "name": "Testing de interfaces usuarios",
        "alias": "Testing",
        "hours": [
            {
                "day": "Martes",
                "block": "3-4"
            },
            {
                "day": "Martes",
                "block": "5-6"
            }
        ],
        "teacher": "Lioubov Dombrovskaia",
        "number": 200, 
        "credits": 5,
        "color": colorOrange
    },
    {
        "id": 56,
        "name": "Trabajo de titulo",
        "alias": "Titulo 1",
        "hours": [
            {
                "day": "Lunes",
                "block": "11-12"
            }
        ],
        "teacher": "Luis Hevia",
        "number": 200, 
        "credits": 5,
        "color": colorPink
    },
    {
        "id": 57,
        "name": "Visualización de datos",
        "alias": "VD",
        "hours": [
            {
                "day": "Lunes",
                "block": "5-6"
            },
            {
                "day": "Miercoles",
                "block": "5-6"
            }
        ],
        "teacher": "Jose Luis Marti",
        "number": 200, 
        "credits": 5,
        "color": colorOrange
    },
    {
        "id": 58,
        "name": "Optimización",
        "alias": "Opti",
        "hours": [
            {
                "day": "Lunes",
                "block": "5-6"
            },
            {
                "day": "Miercoles",
                "block": "5-6"
            }
        ],
        "teacher": "NN",
        "number": 200, 
        "credits": 5,
        "color": colorRed
    },
];

export const scheduleQuimica = [
    {
        "id": 101,
        "name": "Análisis de procesos químicos",
        "alias": "APQ",
        "hours": [
            {
                "day": "Martes",
                "block": "5-6"
            },
            {
                "day": "Miercoles",
                "block": "9-10"
            },
            {
                "day": "Viernes",
                "block": "3-4"
            }
        ],
        "teacher": "Daniel Navia",
        "number": 200, 
        "credits": 7,
        "color": colorGreen
    },
    {
        "id": 102,
        "name": "Análisis y diseño de experimentos industriales",
        "alias": "ADEI",
        "hours": [
            {
                "day": "Martes",
                "block": "9-10"
            },
            {
                "day": "Viernes",
                "block": "7-8"
            }
        ],
        "teacher": "Daniel Navia",
        "number": 200, 
        "credits": 5,
        "color": colorGreen
    },
    {
        "id": 103,
        "name": "Balance de materia",
        "alias": "Materia",
        "hours": [
            {
                "day": "Martes",
                "block": "1-2"
            },
            {
                "day": "Jueves",
                "block": "1-2"
            },
            {
                "day": "Jueves",
                "block": "13-14"
            },
            {
                "day": "Viernes",
                "block": "11-12"
            },

        ],
        "teacher": "Gonzalo Nuñez",
        "number": 200, 
        "credits": 8,
        "color": colorRed
    },
    {
        "id": 104,
        "name": "Desafío de la matriz energética de Chile",
        "alias": "DME",
        "hours": [
            {
                "day": "Viernes",
                "block": "11-12"
            },
            {
                "day": "Viernes",
                "block": "13-14"
            }
        ],
        "teacher": "Maria Valenzuela",
        "number": 200, 
        "credits": 5,
        "color": colorPurple
    },
    {
        "id": 105,
        "name": "Diseño de procesos",
        "alias": "Procesos",
        "hours": [
            {
                "day": "Miercoles",
                "block": "5-6"
            },
            {
                "day": "Miercoles",
                "block": "7-8"
            }
        ],
        "teacher": "Patricio Nuñez",
        "number": 200, 
        "credits": 5,
        "color": colorGreen
    },
    {
        "id": 106,
        "name": "Fenómenos de transporte",
        "alias": "FdT",
        "hours": [
            {
                "day": "Miercoles",
                "block": "5-6"
            },
            {
                "day": "Jueves",
                "block": "9-10"
            }
        ],
        "teacher": "Maria Paz Dominguez",
        "number": 200, 
        "credits": 7,
        "color": colorRed
    },
    {
        "id": 107,
        "name": "Fundamentos de control industrial",
        "alias": "FCI",
        "hours": [
            {
                "day": "Lunes",
                "block": "3-4"
            },
            {
                "day": "Martes",
                "block": "3-4"
            },
            {
                "day": "Miercoles",
                "block": "3-4"
            }
        ],
        "teacher": "Ivan Cornejo",
        "number": 200, 
        "credits": 8,
        "color": colorGreen
    },
    {
        "id": 108,
        "name": "Fundamentos de ingenieria bioquimica",
        "alias": "FIB",
        "hours": [
            {
                "day": "Lunes",
                "block": "5-6"
            },
            {
                "day": "Miercoles",
                "block": "9-10"
            }
        ],
        "teacher": "Sergio Almonacid",
        "number": 200, 
        "credits": 5,
        "color": colorPurple
    },
    {
        "id": 109,
        "name": "Fundamentos de termodinamica",
        "alias": "FT",
        "hours": [
            {
                "day": "Lunes",
                "block": "11-12"
            },
            {
                "day": "Viernes",
                "block": "3-4"
            }
        ],
        "teacher": "Alberto Ramirez",
        "number": 200, 
        "credits": 5,
        "color": colorPurple
    },
    {
        "id": 110,
        "name": "Ingeniería ambiental",
        "alias": "Ambiental",
        "hours": [
            {
                "day": "Lunes",
                "block": "11-12"
            },
            {
                "day": "Viernes",
                "block": "3-4"
            }
        ],
        "teacher": "Fabián Guerrero",
        "number": 200, 
        "credits": 4,
        "color": colorGreen
    },
    {
        "id": 111,
        "name": "Ingeniería de reactores",
        "alias": "IR",
        "hours": [
            {
                "day": "Miercoles",
                "block": "5-6"
            },
            {
                "day": "Jueves",
                "block": "3-4"
            },
            {
                "day": "Jueves",
                "block": "9-10"
            },
            {
                "day": "Jueves",
                "block": "13-14"
            }
        ],
        "teacher": "Gonzalo Nuñez",
        "number": 200, 
        "credits": 7,
        "color": colorGreen
    },
    {
        "id": 112,
        "name": "Laboratorio de investigacion",
        "alias": "LI",
        "hours": [
            {
                "day": "Viernes",
                "block": "5-6"
            },
            {
                "day": "Viernes",
                "block": "7-8"
            }
        ],
        "teacher": "Gonzalo Nuñez",
        "number": 200, 
        "credits": 7,
        "color": colorPurple
    },
    {
        "id": 113,
        "name": "Laboratorio de procesos",
        "alias": "LI",
        "hours": [
            {
                "day": "Lunes",
                "block": "3-4"
            },
            {
                "day": "Lunes",
                "block": "5-6"
            },
            {
                "day": "Lunes",
                "block": "7-8"
            },
            {
                "day": "Lunes",
                "block": "9-10"
            },
            {
                "day": "Lunes",
                "block": "11-12"
            },
        ],
        "teacher": "Rodrigo Benavides",
        "number": 200, 
        "credits": 8,
        "color": colorGreen
    },
    {
        "id": 114,
        "name": "Legislacion ambiental",
        "alias": "LA",
        "hours": [
            {
                "day": "Viernes",
                "block": "11-12"
            },
            {
                "day": "Viernes",
                "block": "13-14"
            }
        ],
        "teacher": "Proceso Interno",
        "number": 200, 
        "credits": 5,
        "color": colorPurple
    },
    {
        "id": 115,
        "name": "Maquinaria industrial auxiliar",
        "alias": "MIA",
        "hours": [
            {
                "day": "Lunes",
                "block": "1-2"
            },
            {
                "day": "Viernes",
                "block": "1-2"
            }
        ],
        "teacher": "Juan Mora",
        "number": 200, 
        "credits": 4,
        "color": colorPink
    },
    {
        "id": 116,
        "name": "Mecánica de sistemas fluidos",
        "alias": "Fluidos",
        "hours": [
            {
                "day": "Lunes",
                "block": "7-8"
            },
            {
                "day": "Lunes",
                "block": "9-10"
            },
            {
                "day": "Jueves",
                "block": "9-10"
            }
        ],
        "teacher": "Miriam Roth",
        "number": 200, 
        "credits": 7,
        "color": colorPink
    },
    {
        "id": 117,
        "name": "Modelación comp. de fenómenos de transporte",
        "alias": "MFT",
        "hours": [
            {
                "day": "Jueves",
                "block": "11-12"
            },
            {
                "day": "Viernes",
                "block": "5-6"
            }
        ],
        "teacher": "NN",
        "number": 200, 
        "credits": 8,
        "color": colorPurple
    },
    {
        "id": 118,
        "name": "Personas y organización en la industria de procesos",
        "alias": "PIP",
        "hours": [
            {
                "day": "Martes",
                "block": "9-10"
            },
            {
                "day": "Miercoles",
                "block": "9-10"
            }
        ],
        "teacher": "Pedro Arriagada",
        "number": 200, 
        "credits": 5,
        "color": colorGreen
    },
    {
        "id": 119,
        "name": "Procesamiento de alimentos por deshidratación y por fermentación",
        "alias": "PDF",
        "hours": [
            {
                "day": "Lunes",
                "block": "9-10"
            },
            {
                "day": "Miercoles",
                "block": "5-6"
            }
        ],
        "teacher": "Cristian Ramirez",
        "number": 200, 
        "credits": 7,
        "color": colorPurple
    },
    {
        "id": 120,
        "name": "Procesos avanzados de separación por membranas y barreras sólidas",
        "alias": "PMB",
        "hours": [
            {
                "day": "Lunes",
                "block": "7-8"
            },
            {
                "day": "Miercoles",
                "block": "7-8"
            }
        ],
        "teacher": "Proceso Interno",
        "number": 200, 
        "credits": 5,
        "color": colorPurple
    },
    {
        "id": 121,
        "name": "Proyectos",
        "alias": "P",
        "hours": [
            {
                "day": "Viernes",
                "block": "3-4"
            },
            {
                "day": "Viernes",
                "block": "5-6"
            }
        ],
        "teacher": "Rodrigo Benavides",
        "number": 200, 
        "credits": 7,
        "color": colorGreen
    },
    {
        "id": 122,
        "name": "Proyectos Específicos",
        "alias": "PE",
        "hours": [
            {
                "day": "Viernes",
                "block": "7-8"
            },
            {
                "day": "Viernes",
                "block": "9-10"
            }
        ],
        "teacher": "Proceso Interno",
        "number": 200, 
        "credits": 8,
        "color": colorPurple
    },
    {
        "id": 123,
        "name": "Simulacion de procesos",
        "alias": "SP",
        "hours": [
            {
                "day": "Jueves",
                "block": "9-10"
            }
        ],
        "teacher": "Andres Donoso",
        "number": 200, 
        "credits": 7,
        "color": colorPurple
    },
    {
        "id": 124,
        "name": "Taller de ingeniería quimica IV",
        "alias": "T 4",
        "hours": [
            {
                "day": "Lunes",
                "block": "9-10"
            }
        ],
        "teacher": "Pedro Arriagada",
        "number": 200, 
        "credits": 2,
        "color": colorGreen
    },
    {
        "id": 125,
        "name": "Taller de ingeniería quimica V",
        "alias": "T 5",
        "hours": [
            {
                "day": "Jueves",
                "block": "13-14"
            }
        ],
        "teacher": "Valentina Wyman",
        "number": 200, 
        "credits": 3,
        "color": colorGreen
    },
    {
        "id": 126,
        "name": "Taller de ingeniería quimica I",
        "alias": "T 1",
        "hours": [
            {
                "day": "Miercoles",
                "block": "3-4"
            }
        ],
        "teacher": "Pedro Arriagada",
        "number": 201, 
        "credits": 1,
        "color": colorGreen
    },
    {
        "id": 127,
        "name": "Taller de ingeniería quimica I",
        "alias": "T 1",
        "hours": [
            {
                "day": "Martes",
                "block": "15-16"
            }
        ],
        "teacher": "Cristian Didyk",
        "number": 202, 
        "credits": 1,
        "color": colorGreen
    },
    {
        "id": 128,
        "name": "Taller de ingeniería quimica II",
        "alias": "T 2",
        "hours": [
            {
                "day": "Lunes",
                "block": "13-14"
            }
        ],
        "teacher": "Pedro Arriagada",
        "number": 200, 
        "credits": 1,
        "color": colorGreen
    },
    {
        "id": 129,
        "name": "Taller de ingeniería quimica III",
        "alias": "T 3",
        "hours": [
            {
                "day": "Viernes",
                "block": "13-14"
            }
        ],
        "teacher": "Cristian Didyk",
        "number": 200, 
        "credits": 1,
        "color": colorGreen
    },
    {
        "id": 130,
        "name": "Tecnologias emergentes",
        "alias": "TE",
        "hours": [
            {
                "day": "Lunes",
                "block": "7-8"
            },
            {
                "day": "Martes",
                "block": "3-4"
            }
        ],
        "teacher": "NN",
        "number": 200, 
        "credits": 5,
        "color": colorPurple
    },
    {
        "id": 131,
        "name": "Termodinámica de procesos",
        "alias": "Termo 1",
        "hours": [
            {
                "day": "Lunes",
                "block": "3-4"
            },
            {
                "day": "Lunes",
                "block": "11-12"
            },
            {
                "day": "Martes",
                "block": "9-10"
            },
            {
                "day": "Miercoles",
                "block": "11-12"
            },
            {
                "day": "Viernes",
                "block": "9-10"
            },
            {
                "day": "Viernes",
                "block": "11-12"
            }
        ],
        "teacher": "Tania Sandoval",
        "number": 200, 
        "credits": 8,
        "color": colorRed
    },
    {
        "id": 132,
        "name": "Termodinámica para ingeniería química",
        "alias": "Termo 2",
        "hours": [
            {
                "day": "Lunes",
                "block": "13-14"
            },
            {
                "day": "Martes",
                "block": "3-4"
            },
            {
                "day": "Martes",
                "block": "9-10"
            },
            {
                "day": "Jueves",
                "block": "11-12"
            },
            {
                "day": "Jueves",
                "block": "13-14"
            }
        ],
        "teacher": "Tania Sandoval",
        "number": 200, 
        "credits": 8,
        "color": colorRed
    },
    {
        "id": 133,
        "name": "Titulacion",
        "alias": "Titulacion 1",
        "hours": [
            {
                "day": "Viernes",
                "block": "3-4"
            },
            {
                "day": "Viernes",
                "block": "5-6"
            }
        ],
        "teacher": "Ivan Cornejo",
        "number": 200, 
        "credits": 7,
        "color": colorGreen
    },
    {
        "id": 134,
        "name": "Titulacion",
        "alias": "Titulacion 2",
        "hours": [
            {
                "day": "Miercoles",
                "block": "7-8"
            },
            {
                "day": "Miercoles",
                "block": "9-10"
            }
        ],
        "teacher": "Maria Paz Dominguez",
        "number": 200, 
        "credits": 20,
        "color": colorGreen
    },
    {
        "id": 135,
        "name": "Transferencia de calor",
        "alias": "Calor",
        "hours": [
            {
                "day": "Lunes",
                "block": "9-10"
            },
            {
                "day": "Martes",
                "block": "11-12"
            },
            {
                "day": "Miercoles",
                "block": "11-12"
            },
            {
                "day": "Viernes",
                "block": "11-12"
            }
        ],
        "teacher": "Paula Guerra",
        "number": 200, 
        "credits": 7,
        "color": colorRed
    },
    {
        "id": 136,
        "name": "Transferencia de materia",
        "alias": "Materia",
        "hours": [
            {
                "day": "Lunes",
                "block": "3-4"
            },
            {
                "day": "Martes",
                "block": "11-12"
            },
            {
                "day": "Miercoles",
                "block": "3-4"
            },
            {
                "day": "Viernes",
                "block": "3-4"
            }
        ],
        "teacher": "Carolyn Palma",
        "number": 200, 
        "credits": 8,
        "color": colorRed
    },
];