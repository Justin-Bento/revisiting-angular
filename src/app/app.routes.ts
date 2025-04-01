import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {
    path: '',
    title: 'Home Page',
    component: HomeComponent,
  },
  {
    path: 'about',
    title: 'About Page',
    component: AboutComponent,
  },
  {
    path: 'projects',
    title: 'Proejcts Page',
    component: ProjectsComponent,
  },
  {
    path: 'blog',
    title: 'Blog  Page',
    component: BlogComponent,
  },
  {
    path: 'contact',
    title: 'Contact Page',
    component: ContactComponent,
  },
];
export default routes;
