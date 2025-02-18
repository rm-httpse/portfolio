import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  content = {
    boutme: {
      mind: 'Vivo en Barcelona, España desde hace un año, tiempo en el cual tuve la oportunidad de conocer muchos lugares nuevos, experimentar y crecer tanto personal como profesionalmente. Durante este tiempo, también he podido reflexionar mucho, reviviendo las pasiones que desde pequeño he sentido, mientras al mismo tiempo abriendo mi mente a nuevos horizontes. Por mencionar otra cosa importante, puedo agregar que también siento que entiendo mucho mejor como funciona la vida real, y de los problemas que se enfrentan día a día en el país y en el mundo.',
      creactivity: 'Desde muy temprana edad he sentido una afinidad por las matemáticas, demostrando fluidez en dicha materia y a todas las ramas relacionadas, lo cual de cierta forma moldeó mi forma y capacidad de pensar y analizar los problemas. Mis intereses pueden abordar una variedad de ámbitos, por nombrar algunos, puedo mencionar que soy aficionado a la relatividad y la física cuántica, me interesa el campo de las telecomunicaciones, la ciberseguridad, y múltiples lenguajes de programación.\n\nQuiero destacar que mis proyectos personales siempre estarán impulsados por mi creatividad e intereses, los cuales pueden ser muchos para mencionar, pero lo que sí puedo mencionar es que todos convergen a una misma finalidad que es, intentar hacer del mundo un lugar mejor para todos :)',
      hobbies: 'Naturalmente mis hobbies también forman parte de mis intereses y son fundamentales, ya que en cierta forma mantienen viva mi creactividad, siguiendo historias y experiencias de todo tipo, constantemente abriéndome a nuevos horizontes.',
      destiny: 'También disfruto mucho viajar y conocer nuevos destinos y culturas. Soy alguien que disfruta tanto el viaje como el destino.',
      gamesList: [
        {
          name: 'Crash Bandicoot',
          src: 'https://static.posters.cz/image/750/99518.jpg',
        },
        {
          name: 'Ace Attorney',
          src: 'https://m.media-amazon.com/images/I/71SrngbzT6L.jpg',
        },
        {
          name: 'Yakuza: Like a Dragon',
          src: 'https://wallpapercave.com/wp/wp8649388.jpg',
        },
        {
          name: 'Death Stranding',
          src: 'https://cdna.artstation.com/p/assets/images/images/025/990/496/large/litos-lopez-phone3.jpg?1587554640',
        },
        {
          name: 'Sekiro: Shadows Die Twice',
          src: 'https://preview.redd.it/glinebbvmtw21.jpg?auto=webp&s=718084cc963b848a9c0afa345dbf8dc09f1721dc',
        },
      ],
      storiesList: [
        {
          name: 'Dragon Ball',
          src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSigRIk85HsKZiS8hV7Ptj_PCYVdc7OaVYhJg&s',
        },
        {
          name: 'Evangelion',
          src: 'https://w0.peakpx.com/wallpaper/614/279/HD-wallpaper-eva-01-in-station-eva-eva01-evangelion-thumbnail.jpg',
        },
        {
          name: 'Mr. Robot',
          src: 'https://preview.redd.it/st0tjzqro3y41.png?width=1440&format=png&auto=webp&s=5b54592f2193cfd4e182af0aefc533f4c2e5b49f',
        },
        {
          name: 'Perfect Blue',
          src: 'https://i.pinimg.com/550x/03/b1/74/03b174ae8ff79cd5ccc4e6b25166c16b.jpg',
        },
        {
          name: 'Everything everywhere all at once',
          src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyd1o3udLMu0-zV9H6uEx-cGMetONh0HnPOg&s',
        },
      ],
      destinyList: [
        {
          name: 'Mérida, Venezuela',
          src: 'https://upload.wikimedia.org/wikipedia/commons/4/40/El_cruce_de_las_bandas._Merida..jpg',
        },
        {
          name: 'Napoli, Italia',
          src: 'https://www.civitatis.com/blog/wp-content/uploads/2024/02/shutterstock_732553141-scaled.jpg',
        },
        {
          name: 'Japón',
          src: 'https://www.advantour.com/img/japan/images/index.jpg',
        },
        {
          name: 'Argentina',
          src: 'https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/a4e2/live/524bca40-6921-11ee-99df-dd674d5e8274.png.webp',
        },
      ]
    },
    CV: [
      {
        companyName: 'Apply Digital',
        role: 'Full-stack developer',
        period: 'Aug 2021 - Jul 2023',
        activities: [
          'Full-stack development of technological solutions for multiple projects (mainly for the technological sector)',
          'Structured implementation of the front-end using the atomic design methodology and the integration of Contentful as a CMS.',
          'Development of a back-end application responsible for orchestrating a series of processes, utilizing AWS technologies to ensure workflow integrity, scalability, and proper operation.',
          'Tech Stack: TypeScript, React, Next.js, Angular, NestJS, Tailwind, AWS (DynamoDB, Lambda, Step Functions, API Gateway), Contentful, Git, Serverless.',
        ]
      },
      {
        companyName: 'Waku Casa de Software',
        role: 'Front-end Developer',
        period: 'Feb 2021 - Aug 2021',
        activities: [
          'Development on the interface and logic for an app within the financial sector, focusing on',
          'building modern, functional and responsive UIs (for both desktop and mobile). Introduction to CI/CD.',
          'Tech Stack: TypeScript, React, React Native, Tailwind, Redux, Git, Github, Github Pipelines, Kanban.',
        ]
      },
      {
        companyName: 'BINWUS',
        role: 'Full-stack developer',
        period: 'Sept 2019 - Jan 2021',
        activities: [
          'Active participation as a software developer in the company, contributing to the design, development, and implementation of multiple internal and external projects.',
          'Responsible for creating and building microservices, to be used in projects within the company through REST APIs.',
          'Tech Stack: TypeScript, Angular, Angular Material, Express, PostgreSQL, Swagger, Git, Bitbucket, Kanban',
        ]
      }
    ],
    education: [
      {
        schoolName: 'Universidad Rafael Urdaneta',
        period: '2016 - 2020',
        degree: 'Computer Engineering',
        comments: [
          'Promedio de Graduación: 16.80/20',
          'Recibí 7 títulos de reconocimiento por mantener promedios superiores a 17 durante mi tiempo de estudio',
          'Proyecto Final: Desarrollé, en colaboración, una aplicación MVP que integró metodologías ágiles con la API de GitHub, demostrando la viabilidad de una herramienta centralizada para la gestión de proyectos de software.',
              ]
      }
    ],
    skills: [
      'TypeScript',
      'JavaScript',
      'Angular',
      'React',
      'Next.js',
      'React Native',
      'Redux',
      'Tailwind',
      'Angular Material',
      'Atomic Design',
      'Responsive Design',
      'HTML',
      'CSS',
      'SASS',
      'Bootstrap',
      'Materialize',
      'Jest',
      'Storybook',
      'Git',
      'Github',
      'Bitbucket',
      'CI/CD',
      'Kanban',
      'Scrum',
      'Agile',
      'Node.js',
      'Express',
      'NestJS',
      'REST APIs',
      'GraphQL',
      'PostgreSQL',
      'MongoDB',
      'DynamoDB',
      'AWS',
      'Lambda',
      'Step Functions',
      'API Gateway',
      'Serverless',
      'Swagger'
    ],
    projects: {
      own: [],
      workedFor: [
        {
          url: 'https://www.modernatx.com/',
          clientName: 'Moderna',
          location: 'EE.UU, Canadá',
          info: [
            'Compañía farmacéutica con alcance internacional.',
            'Participación en múltiples proyectos junto a equipos en Chile, Estados Unidos y Canadá.',
            'Mantenimiento, modificación y creación de componentes frontend (Next.js).',
            'Desarrollo y despliegue de APIs y microservicios (Nest.js, AWS).',
            'Comunicación directa con directivos.',
          ],
          img: ''
        },
        {
          url: 'https://www.cruzverde.cl/',
          clientName: 'Cruz Verde',
          location: 'Chile',
          info: [
            'Compañía farmacéutica chilena.',
            'Creación y modificación de páginas y componentes (Angular).',
            'Interacción directa con el product owner asignado por Socofar.',
          ],
          img: ''
        },
        {
          url: 'https://www.binwus.com/es/binwus-his/',
          clientName: 'Binwus-HIS',
          location: 'Venezuela',
          info: [
            'Solución de software para la gestión y administración de servicios médicos en Venezuela.',
            'Migración de un sistema legado a Angular, desarrollando múltiples vistas nuevas a partir del backbone de la aplicación.',
            'Contacto directo con el CEO y COO.',
          ],
          img: ''
        },
        {
          url: 'https://goutru.com/',
          clientName: 'Goutru',
          location: 'Venezuela',
          info: [
            'Suite en la nube para la gestión de visitantes, diseñada para entornos seguros en comunidades y edificios.',
            'Desarrollo de requerimientos de frontend (Angular) y backend (Express, PostgreSQL).',
          ],
          img: ''
        },
        {
          url: 'https://info.acreditta.com/',
          clientName: 'Acreditta',
          location: 'Venezuela',
          info: [
            'Participación en el desarrollo del MVP del proyecto "Rutas Acreditta" (Angular), orientado a la creación de árboles de insignias digitales para certificaciones.',
            'Comunicación directa con el GFS de BINWUS y el product owner de Acreditta.',
          ],
          img: ''
        }
      ]
    }
  }

}
