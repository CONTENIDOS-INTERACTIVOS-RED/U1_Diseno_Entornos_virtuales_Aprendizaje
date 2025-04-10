export default {
  global: {
    numeroUnidad: '1',
    tituloUnidad: 'Fundamentos y diseño pedagógico de los entornos virtuales',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Fundamentos de los Entornos Virtuales de Aprendizaje',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Conceptos, evolución y características de los EVA',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo:
              'Beneficios y desafíos de los entornos virtuales en la educación',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Tecnologías y plataformas para la implementación de EVA',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo:
          'Modelos pedagógicos e instruccionales para el aprendizaje digital',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Enfoques y teorías del aprendizaje, aplicadas a los EVA',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo:
              'Modelos instruccionales: ADDIE, TPACK y su aplicación en el diseño virtual ',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo:
              'Estrategias didácticas para la enseñanza en entornos virtuales',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Silva Quiroz, J. (2011). <i>Diseño y moderación de entornos virtuales de aprendizaje (EVA)</i>. Editorial UOC. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/33530 ',
    },
    {
      referencia:
        'Barrera García, A. R. (2010). <i>Diseño didáctico de un entorno virtual de aprendizaje para la capacitación de directivos del poder popular</i>. D - Instituto Superior Politécnico José Antonio Echeverría. CUJAE. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/85861 ',
    },
    {
      referencia:
        'Bautista Pérez, G. Borges Sáiz, F. & Forés Miravalles, A. (2016). <i>Didáctica universitaria en entornos virtuales de enseñanza-aprendizaje</i>. Narcea Ediciones. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/46047 ',
    },
    {
      referencia:
        'Acevedo-Blanco, A. J. Díaz Perea, M. Y. & Fernández Rodríguez, J. (2024). <i>El aprendizaje-servicio en el entorno virtual: pedagogía innovadora para la Universidad del siglo XXI</i>. Dykinson. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/275427 ',
    },
    {
      referencia:
        'Ramírez Chirinos, L. A. (2013). <i>Entornos virtuales de aprendizaje (EVA): aproximación al mejoramiento de la calidad comunicacional en una universidad venezolana</i>. A - UCLA Universidad Centroccidental Lisandro Alvarado. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/14239 ',
    },
    {
      referencia:
        'Torres Quiñones, A. (2015). <i>La construcción de las estrategias de aprendizaje en la formación inicial del profesional de la educación desde los entornos virtuales de aprendizaje</i>. Editorial Universitaria. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/90692 ',
    },
    {
      referencia:
        'Alanya Beltran, J. E. & Padilla Caballero, J. E. A. (Dir.). (2022). <i>Estilo de aprendizaje de los estudiantes universitarios en entornos virtuales desde la mirada docente</i>. D - Universidad César Vallejo. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/228698 ',
    },
    {
      referencia:
        'Almidón Elescano, A. & Maquera Quispe, H. G. (Dir.). (2021). <i>Entorno virtual como soporte en el proceso de la enseñanza aprendizaje de los estudiantes de Ingeniería Electrónica de la Universidad Nacional de Huancavelica</i>. D - Universidad Nacional del Centro del Perú.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/228303',
    },
    {
      referencia:
        'Belloch, C. (s.f.). <i>Entornos Virtuales de Aprendizaje</i>. Universidad de Valencia.',
      link: 'https://www.uv.es/bellochc/pedagogia/EVA3.pdf',
    },
    {
      referencia:
        'Ramírez Ramírez, L. N. & Fernández de Castro, J. (2019). <i>Entornos virtuales de aprendizaje: usabilidad y alcance en la formación de competencias profesionales del área educativa</i>. Filha.',
      link:
        'https://www.filha.com.mx/publicaciones/edicion/2019-12/entornos-virtuales-de-aprendizaje-usabilidad-y-alcance-en-la-formacion-de-competencias-profesionales-del-area-educativa-por-leticia-nayeli-ramirez-ramirez-y-javier-fernandez-de-castro',
    },
    {
      referencia:
        'Barreto Pinzón, F., Rodríguez Sanabria, C. & Gutiérrez Castro, B. A. (2016). <i>Ambiente Virtual de Aprendizaje AVA, Normas APA, Cita Referencias, Tablas y Figuras</i>. Corporación Universitaria Minuto de Dios. ',
      link:
        'https://repository.uniminuto.edu/items/818a8d7c-5c06-4758-a69a-526257cedc07?utm_source=chatgpt.com',
    },
    {
      referencia:
        'Mestre, U., Fonseca, J. & Valdés, P. (2007). <i>Entornos Virtuales de Aprendizaje</i>. Las Tunas: Universitaria.',
      link:
        'https://cmapspublic.ihmc.us/rid%3D1SWRH5PH5-CDWS37-48HC/REFERENCIAS%20BIBLIOGRAFICAS%20QUE%20APOYAN%20EL%20ESTUDIO%20TEORICO%20DE%20LOS%20ENTORNOS%20VIRTUALES%20DE%20APRENDIZAJE.pdf',
    },
    {
      referencia:
        'Salmon, G. (2004). <i>E-actividades: El factor clave para una formación en línea activa</i>. Barcelona: Universitat Oberta de Catalunya.',
      link:
        'https://www.uam.mx/educacionvirtual/uv/doc/bib/Bibliografia-General-Cursos-en-linea.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Accesibilidad',
      significado:
        'Capacidad de los entornos digitales para ser utilizados por todas las personas, incluyendo aquellas con discapacidades o necesidades específicas.',
    },
    {
      termino: 'Aprendizaje adaptativo',
      significado:
        'Método educativo que utiliza tecnología para personalizar los contenidos y actividades, según el ritmo y necesidades del estudiante.',
    },
    {
      termino: 'Aprendizaje basado en problemas',
      significado:
        'Estrategia didáctica que fomenta la solución de problemas reales, como mecanismo de adquisición de conocimientos.',
    },
    {
      termino: 'Aprendizaje colaborativo',
      significado:
        'Modelo en el que los estudiantes trabajan en conjunto, para construir conocimientos a través de la interacción y el debate.',
    },
    {
      termino: 'Analítica del aprendizaje',
      significado:
        'Uso de datos recopilados en entornos digitales, para analizar patrones y optimizar los procesos educativos.',
    },
    {
      termino: 'Competencias digitales',
      significado:
        'Conjunto de habilidades necesarias para utilizar tecnologías de la información, de manera adecuada, en el ámbito educativo y profesional.',
    },
    {
      termino: 'Conectivismo',
      significado:
        'Teoría del aprendizaje que enfatiza la adquisición de conocimientos a través de redes digitales y la interacción con múltiples fuentes de información.',
    },
    {
      termino: 'Diseño instruccional',
      significado:
        'Proceso sistemático de creación de experiencias de aprendizaje, estructuradas en entornos digitales.',
    },
    {
      termino: 'Entorno virtual de aprendizaje',
      significado:
        'Espacio digital diseñado para la enseñanza y el aprendizaje, mediante el uso de plataformas tecnológicas.',
    },
    {
      termino: 'Evaluación formativa',
      significado:
        'Estrategia de evaluación que busca monitorear el aprendizaje del estudiante, de manera continua, para mejorar su desempeño.',
    },
    {
      termino: 'Gamificación',
      significado:
        'Aplicación de elementos de juego en el ámbito educativo, con el fin de aumentar la motivación y el compromiso de los estudiantes.',
    },
    {
      termino: 'Inclusión educativa',
      significado:
        'Estrategia que busca garantizar el acceso equitativo a la educación, eliminando barreras y promoviendo la participación de todos los estudiantes.',
    },
    {
      termino: 'Interactividad',
      significado:
        'Característica de los entornos digitales que permite la comunicación bidireccional entre estudiantes y docentes mediante herramientas tecnológicas.',
    },
    {
      termino: 'Inteligencia artificial en educación',
      significado:
        'Aplicación de sistemas automatizados que optimizan el aprendizaje mediante tutorías inteligentes y análisis de datos.',
    },
    {
      termino: 'Microaprendizaje',
      significado:
        'Estrategia educativa basada en la enseñanza de contenidos en unidades pequeñas y específicas para facilitar la retención de conocimientos.',
    },
    {
      termino: 'MOOC (<i>Massive Open Online Course</i>)',
      significado:
        'Curso en línea abierto y masivo que permite la formación de un gran número de estudiantes, simultáneamente.',
    },
    {
      termino: 'Multimodalidad',
      significado:
        'Uso de diferentes formatos de contenido, como texto, video y audio, para mejorar la comprensión en entornos de aprendizaje digital.',
    },
    {
      termino: 'Retroalimentación automatizada',
      significado:
        'Mecanismo en el que un sistema proporciona respuestas inmediatas, a los estudiantes, para mejorar su aprendizaje.',
    },
    {
      termino: 'Tecnología asistiva',
      significado:
        'Conjunto de herramientas diseñadas para facilitar el acceso a la educación a personas con discapacidad o necesidades especiales.',
    },
    {
      termino: 'Webinar',
      significado:
        'Sesión educativa o conferencia impartida en línea, que permite la interacción entre ponentes y asistentes, en tiempo real.',
    },
  ],
}
