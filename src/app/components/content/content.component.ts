import { Component } from '@angular/core';
import { SidebarComponent } from "../sidebar/sidebar.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-content',
  imports: [CommonModule],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent {
  content = {
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

  redirectTo(project: any) {
    window.open(project.url, '_blank');
  }
}
