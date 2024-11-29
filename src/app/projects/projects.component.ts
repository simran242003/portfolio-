// projects.component.ts
import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { CardbuttonsService } from '../cardbuttons.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  @Input() lightMode!: boolean;
  @Input() projects: { id: number, title: string, subtitle: string, description: string, image: string, link: string }[] = [];

  filteredProjects: { id: number, title: string, subtitle: string, description: string, image: string, link: string }[] = [];

  constructor(private cardService: CardbuttonsService, private router: Router) {}

  ngOnInit() {
    this.filteredProjects = this.projects;  
  }

  ngOnChanges() {
    this.filteredProjects = this.projects;  
  }

  filterProjects(event: Event) {
    const title = (event.target as HTMLInputElement).value.toLowerCase();
    this.filteredProjects = this.projects.filter(project => project.title.toLowerCase().includes(title));
  }

  like(projectId: number) {
    this.cardService.likeCard(projectId);
  }

  isProjectLiked(projectId: number): boolean {
    return this.cardService.isLiked(projectId);
  }

  goToProjectDetails(projectId: number) {
    this.router.navigate(['/project', projectId]);
    

  }
}
