import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  aboutComponent = true;
  skillsComponent = false;
  projectComponent = false;
  contactComponent = false;

  loadAboutComponent () {
    this.aboutComponent = true;
    this.skillsComponent = false;
    this.projectComponent = false;
    this.contactComponent = false;
  }; 
  
  loadSkillsComponent () {
    this.aboutComponent = false;
    this.skillsComponent = true;
    this.projectComponent = false;
    this.contactComponent = false;
  };

  loadProjectsComponent () {
    this.aboutComponent = false;
    this.skillsComponent = false;
    this.projectComponent = true;
    this.contactComponent = false;
  };
}
