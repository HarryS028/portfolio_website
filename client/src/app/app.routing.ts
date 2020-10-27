import { Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    {path: '', component: AppComponent},
    {path: 'projects', component: ProjectsComponent},
    {path: 'skills', component: SkillsComponent},
    {path: 'about', component: AboutComponent},
    {path: 'contact', component: ContactComponent},

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);