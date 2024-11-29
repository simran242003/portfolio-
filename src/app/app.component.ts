import { Component } from '@angular/core';
import { Project, Content } from './interfaceCP';
import  projectsData from '../assets/data/projects.json';
import  contentData from '../assets/data/content.json';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // projects: Project[] = projectsData.projectsData;
  // content: Content = contentData.contentData;

  projects: Project[] = [];
  content: Content | undefined;

  lightMode: boolean = false;
  name: string = '';
  socials: { linkedin: string; github: string } = { linkedin: '', github: '' };

  //socials: any[] = [];
  // lightMode=this.content.lightMode;
  // name= this.content.name;
  // socials = this.content.socials;
 
  constructor( private http: HttpClient) { }
  ngOnInit(): void {
    
    this.loadProjects();
    this.loadContent();
  }

  loadProjects(): void {
    this.http.get<any>('assets/data/projects.json').subscribe(
      data => this.projects = data.projectsData,
      error => console.error('Error loading projects data', error)
    );
  }

  loadContent(): void {
    this.http.get<any>('assets/data/content.json').subscribe(
      data => {
        this.content = data.contentData;
        if (this.content) {
          this.lightMode = this.content.lightMode;
          this.name = this.content.name;
          this.socials = this.content.socials;
        }
      },
      error => console.error('Error loading content data', error)
    );
  }

}

