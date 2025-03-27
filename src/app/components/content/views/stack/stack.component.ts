import { Component } from '@angular/core';
import { CardComponent } from '../../../card/card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stack',
  imports: [CommonModule],
  templateUrl: './stack.component.html',
  styleUrl: './stack.component.scss'
})
export class StackComponent {
  skills = [
    { name: "Frontend Development & Tools", items: ["HTML", "CSS", "JavaScript", "TypeScript", "Angular", "React", "Next.js", "Redux", "RxJS", "Bootstrap", "Tailwind", "NgRx", "Sass"] },
    { name: "Backend Development", items: ["Node.js", "Express", "NestJS", "REST APIs", "GraphQL"] },
    { name: "Databases", items: ["PostgreSQL", "MySQL", "MongoDB", "DynamoDB"] },
    { name: "Cloud", items: ["AWS", "Lambda", "Step Functions", "API Gateway"] },
    { name: "Testing", items: ["Jest", "Mocha", "Chai", "Karma", "Jasmine", "React-testing-library", "Storybook"] },
    { name: "Tools & DevOps", items: ["Git", "GitHub", "Bitbucket", "CI/CD", "Swagger", "Serverless"] },
    { name: "Methodologies", items: ["Kanban", "Scrum", "Waterfall"] }
  ];

// FE: Frontend Dev
// BE: Backend Dev
// MD: Mobile Dev
// DB: Databases
// AWS
// CV: Control Versioning
// CI/CD
// AM: Agile Methodologies
// TM: Traditional Methodologies
  
  // skills = [
  //   { name: "TypeScript", expertise: 1, relatedTo: ['FE', 'BE'] },
  //   { name: "JavaScript", expertise: 1, relatedTo: ['FE', 'BE'] },
  //   { name: "NodeJS", expertise: 1, relatedTo: ['BE'] },
  //   { name: "Angular", expertise: 1, relatedTo: ['FE'] },
  //   { name: "React", expertise: 1, relatedTo: ['FE'] },
  //   { name: "Next", expertise: 1, relatedTo: ['FE'] },
  //   { name: "React Native", expertise: 1, relatedTo: ['FE', 'MD'] },
  //   { name: "Express", expertise: 1, relatedTo: ['BE'] },
  //   { name: "NestJS", expertise: 1, relatedTo: ['BE'] },
  //   { name: "REST", expertise: 1, relatedTo: ['BE', 'Stnd'] },
  //   { name: "GraphQL", expertise: 1, relatedTo: ['BE', 'Stnd'] },
  //   { name: "PostgreSQL", expertise: 1, relatedTo: ['DB'] },
  //   { name: "MongoDB", expertise: 1, relatedTo: ['DB'] },
  //   { name: "DynamoDB", expertise: 1, relatedTo: ['DB', 'AWS'] },
  //   { name: "Lambda", expertise: 1, relatedTo: ['AWS'] },
  //   { name: "Step Functions", expertise: 1, relatedTo: ['AWS'] },
  //   { name: "API Gateway", expertise: 1, relatedTo: ['AWS'] },
  //   { name: "Serverless", expertise: 1, relatedTo: ['AWS'] },
  //   { name: "Git", expertise: 1, relatedTo: ['CV'] },
  //   { name: "GitHub Actions", expertise: 1, relatedTo: ['CV', 'CI/CD'] },
  //   { name: "Bitbucket Pipelines", expertise: 1, relatedTo: ['CV', 'CI/CD'] },
  //   { name: "Scrum", expertise: 1, relatedTo: ['AM'] },
  //   { name: "Kanban", expertise: 1, relatedTo: ['AM'] },
  //   { name: "Waterfall", expertise: 1, relatedTo: ['TM'] },

  //   { name: "Redux", expertise: 1, relatedTo: ['FE'] },
  //   { name: "RxJS", expertise: 1, relatedTo: ['FE'] },
  //   { name: "NgRx", expertise: 1, relatedTo: ['FE'] },
  //   { name: "Tailwind", expertise: 1, relatedTo: ['FE'] },
  //   { name: "HTML", expertise: 1, relatedTo: ['FE'] },
  //   { name: "CSS", expertise: 1, relatedTo: ['FE'] },
  //   { name: "Sass", expertise: 1, relatedTo: ['FE'] },
  //   { name: "Bootstrap", expertise: 1, relatedTo: ['FE'] },
  //   { name: "Jest", expertise: 1, relatedTo: ['Test'] },
  //   { name: "Storybook", expertise: 1, relatedTo: ['Test'] },
  //   { name: "Swagger", expertise: 1, relatedTo: ['Docs'] },
  // ];

  sortBy(key: keyof typeof this.skills[0]) {
    this.skills.sort((a, b) => (a[key] > b[key] ? 1 : -1));
  }
}

/*

TypeScript
JavaScript
Node.js
Angular
React
Next.js
React Native
Express
NestJS
REST APIs
GraphQL
PostgreSQL
MongoDB
DynamoDB
AWS
Lambda
Step Functions
API Gateway
Serverless
Git
Github
Bitbucket
Kanban
Scrum

.Redux
.Tailwind
.HTML
.CSS
.SASS
.Bootstrap
.Jest
.Storybook
.Swagger

Angular Material
Atomic Design
Responsive Design
Materialize
*/