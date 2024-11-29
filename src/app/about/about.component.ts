



import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  @Input() lightMode!: boolean;
  activeTab: string = 'skills';

  setActiveTab(tabName: string): void {
    this.activeTab = tabName;
  }
}
