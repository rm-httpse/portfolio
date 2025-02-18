import { Routes } from '@angular/router';
import { HomeComponent } from './components/content/views/home/home.component';
import { ProjectsComponent } from './components/content/views/projects/projects.component';
import { AboutComponent } from './components/content/views/about/about.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'projects', component: ProjectsComponent },
];
