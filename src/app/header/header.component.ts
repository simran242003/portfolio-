import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input() lightMode!: boolean; /* I used assertion operator as I was getting error variable light mode needs to be initialized: https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-0.html */
  @Input() name!:string;
  @Input() socials!: { linkedin: string, github: string };
 


}
