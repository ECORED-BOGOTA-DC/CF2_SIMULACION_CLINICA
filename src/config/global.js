export default {
  global: {
    componenteFormativo:
      'Desarrollo y aplicación de simulación clínica en procesos de formación',
    descripcionCurso:
      'La planeación y ejecución de un ambiente simulado implica conocer los aspectos que constituyen esta práctica, lo cual abarca un complejo entramado de elementos académicos (población, objetivos, entre otros), administrativos (espacio físico, insumos y equipos) y de la simulación clínica (casos, fases) dispuestas para el óptimo desarrollo de estos ambientes, con el fin de cualificar a los profesionales que participan.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Modalidades para el desarrollo de zonas de simulación',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo:
              'Importancia de la simulación clínica en el proceso de formación',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Habilidades comunicativas',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Planificación y contexto de simulación clínica',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Tipos de simulación según su fidelidad',
            hash: 't_1_4',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Fases de simulación clínica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Análisis de necesidades en los procesos de formación',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Diseño y aplicación de escenarios de simulación clínica',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Habilidades comunicativas',
      referencia:
        'Ruiz Moral, R. Caballero Martínez, F. García de Leonardo, C. Monge, D. Cañas, F. Castaño, P. (2017). Enseñar y aprender habilidades de comunicación clínica en la Facultad de Medicina. La experiencia de la Francisco de Vitoria (Madrid). <b><em>Educación Médica</em>. Volumen 18, Issue 4, October-December, p. 289-297.</b>',
      tipo: 'PDF',
      link:
        'https://www.sciencedirect.com/science/article/pii/S1575181317300736',
    },
    {
      tema: 'Teorías de la Simulación Clínica',
      referencia:
        'Armijo Rivera, S. (2.021). <b>Teorías para la inserción curricular de la Simulación Clínica. <em>Manual para la inserción curricular de simulación.</em></b>',
      tipo: 'PDF',
      link:
        'https://medicina.udd.cl/files/2021/05/C3-Teorias-para-insercion-curricular-de-simulacion-clinica.pdf',
    },
  ],
  glosario: [
    {
      termino: '<em>Briefing</em>',
      significado:
        'Información e indicaciones dadas a los profesionales o pacientes simulados que participan en un escenario que permite prepararse completamente para las interacciones con los participantes.',
    },
    {
      termino: '<em>Debriefing</em>',
      significado:
        'Proceso formal, colaborativo, reflexivo dentro de la actividad de aprendizaje con simulación.',
    },
    {
      termino: 'Educación Interprofesional',
      significado:
        'Entorno educativo en el que los estudiantes de dos o más profesiones aprenden acerca de, desde y entre sí para permitir una colaboración efectiva y mejorar los resultados en salud.',
    },
    {
      termino: 'Escenario clínico',
      significado:
        'Plan esperado del potencial desarrollo de eventos en una experiencia clínica simulada. Incluye el contexto para la simulación.',
    },
    {
      termino: '<em>Feedback</em>',
      significado:
        'Actividad en la que la información se retransmite a un estudiante, con la intención de mejorar la comprensión de conceptos o aspectos del desempeño.',
    },
    {
      termino: 'Fidelidad conceptual',
      significado:
        'Asegura que todos los elementos del escenario se relacionan entre sí de una manera realista además de integral.',
    },
    {
      termino: 'Modelo Interactivo o simulación',
      significado:
        'Simulador de situación, práctica o conjunto de acciones que permite el aprendizaje que varían de acuerdo a la participación humana.',
    },
    {
      termino: 'Observación',
      significado:
        'Método de <em>Debriefing</em>, donde se declara lo que se observa en la ejecución de la simulación.',
    },
    {
      termino: '<em>Prebriefing</em>',
      significado:
        'Sesión de información u orientación realizada antes del inicio de una actividad de simulación en la que se dan instrucciones o información preparatoria a los participantes.',
    },
    {
      termino: 'Realidad virtual',
      significado:
        'Uso de la tecnología informática para crear un mundo tridimensional interactivo en el que los objetos tienen una sensación de presencia espacial; ambiente, entorno virtual y mundo virtual son sinónimos de realidad virtual.',
    },
    {
      termino: 'Simulación en salud',
      significado:
        'Técnica que crea una situación o ambiente para permitir que las personas experimenten una representación de un evento de atención en salud real con el propósito de practicar, aprender y evaluar.',
    },
    {
      termino: 'Tipología',
      significado:
        'Clasificación de diferentes métodos o equipamientos educativos; por ejemplo, modelos tridimensionales, software de computadora, pacientes estandarizados, entrenadores de habilidades por partes o simuladores de pacientes de alta fidelidad.',
    },
    {
      termino: 'Robótica',
      significado:
        'Rama de la tecnología que se dedica el diseño, construcción, operación, disposición estructural, entre otras. Combinada en diversas disciplinas como: informática, inteligencia artificial, ingeniería de control y física.',
    },
  ],
  referencias: [
    {
      referencia:
        'Ayala, J. Romero, L. Alvarado, A. Gabriela Silvana Cuvi. (2019). La simulación clínica como estrategia de enseñanza-aprendizaje en ciencias de la salud. <em>Revista Metro Ciencia 27(1): 32-38.</em>',
      link:
        'https://revistametrociencia.com.ec/index.php/revista/article/view/60/60',
    },
    {
      referencia:
        'Center for Medical Simulation. (2019). <em>Evaluación del <em>Debriefing</em> para la Simulación en Salud (EDSS).</em>',
      link:
        'https://harvardmedsim.org/wp-content/uploads/2019/05/Manual-de-trabajo-EDSS-VALIDADO.pdf',
    },
    {
      referencia: 'Concepto definicion. (2022). <em>Simulación</em>',
      link: 'https://conceptodefinicion.de/simulacion/',
    },
    {
      referencia:
        'Departamento de Integración de Ciencias Médicas. (2020). <em>Etapas de la Simulación Clínica.</em> [Video] YouTube.',
      link: 'https://www.youtube.com/watch?v=5Nng3DX3fTY',
    },
    {
      referencia:
        'Enfermero de simulación. (2020). <em>La simulación clínica no es un juego. Parte II</em>. De la teoría a la emoción.',
      link:
        'https://enfermerodesimulacion.com/2020/06/21/lasimulacionnoesunjuegoparteii/',
    },
    {
      referencia:
        'Fernández-Quiroga, M. Yévenes, V. Gómez, D. Villarroel, E. (2017). Uso de la simulación clínica como estrategia de aprendizaje para el desarrollo de habilidades comunicacionales en estudiantes de medicina. <em>FEM: Revista de la Fundación Educación Médica.</em> 20(6), 301-304.',
      link: 'https://dx.doi.org/10.33588/fem.206.921',
    },
    {
      referencia:
        'Piña-Jiménez, I. Amador-Aguilar, R. (2015). La enseñanza de la enfermería con simuladores, consideraciones teórico-pedagógicas para perfilar un modelo didáctico. <em>Enfermería Universitaria.</em> Vol. 12. Núm. 3. páginas 152-159 (Julio - Septiembre).',
      link:
        'https://www.elsevier.es/es-revista-enfermeria-universitaria-400-articulo-la-ensenanza-enfermeria-con-simuladores-S1665706315000445',
    },
    {
      referencia:
        'Roussin, C., J. (2017). SimZones: An Organizational Innovation for Simulation Programs and Centers. <em>Academic Medicine.</em> August - Volume 92 - Issue 8 - p. 1114-1120.',
      link:
        'https://journals.lww.com/academicmedicine/fulltext/2017/08000/simzones__an_organizational_innovation_for.29.aspx',
    },
    {
      referencia:
        'Secretaria de enseñanza clínica, internado y servicio social. (2014). <em>Pirámide Miller.</em> [Video] YouTube.',
      link: 'https://www.youtube.com/watch?v=mI9kSPBl_6Q&t=6s',
    },
    {
      referencia:
        'UNAL. (2021). <em>Laboratorio de Simulación.</em> [Video] YouTube.',
      link: 'https://www.youtube.com/watch?v=o0YMDo1qjk0',
    },
    {
      referencia:
        'Velasco, G. Hernández, L. Daniel, A. (2021). Escenario de simulación clínica interprofesional sobre delirium mixto en el pregrado de medicina y fisioterapia. <em>Investigación en educación médica.</em> Vol. 10, núm. 40, pp. 29-36.',
      link: 'https://www.redalyc.org/journal/3497/349770251004/html/',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Líder del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Liliana Victoria Morales Gualdrón',
          cargo: 'Responsable de línea de producción',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Efraín Gómez Matamoros',
          cargo: 'Experto Temático',
          centro:
            'Regional Distrito Capital - Centro de Formación de Talento Humano en Salud',
        },
        {
          nombre: 'Claudia Milena Hernández Naranjo',
          cargo: 'Diseñadora Instruccional',
          centro: 'Regional Distrito Capital - Centro de Gestión Industrial.',
        },
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Asesor Metodológico',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología.',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable Equipo Desarrollo Curricular',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura.',
        },
        {
          nombre: 'Jhon Jairo Rodríguez Pérez',
          cargo: 'Corrector de Estilo',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Adriana Marcela Suarez Eljure',
          cargo: 'Diseñador web',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Jhon Edinson Castañeda Oviedo',
          cargo: 'Desarrollador Fullstack',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Ernesto Navarro Jaimes',
          cargo: 'Animador y Producción audiovisual',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Lady Adriana Ariza Luque',
          cargo: 'Animador y Producción audiovisual',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Laura Gisselle Murcia Pardo',
          cargo: 'Animador y Producción audiovisual',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Lina Marcela Pérez Manchego',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Validación de contenidos accesibles',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
