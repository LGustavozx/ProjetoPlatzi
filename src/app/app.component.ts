import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  sidebarActive = false;

  toggleSidebar(): void {
    this.sidebarActive = !this.sidebarActive;
  }
}
