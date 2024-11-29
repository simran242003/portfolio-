import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardbuttonsService {
  private likedProjects: Set<number> = new Set<number>();

  constructor() { }
  likeCard(projectId: number): void {     /*This method basically toggles the like , if button is already liked, clicking will unlike it and vice versa */
    if (this.likedProjects.has(projectId)) {
      this.likedProjects.delete(projectId);
    } else {
      this.likedProjects.add(projectId);
    }
  }

  isLiked(projectId: number): boolean {
    return this.likedProjects.has(projectId);
  }
}

