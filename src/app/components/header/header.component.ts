import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  username: string | null = '';

  constructor(private router: Router) {
    this.username = localStorage.getItem('username');
  }

  onLogout(): void {
    localStorage.removeItem('username');
    this.router.navigate(['/login']);
  }

  toggleSidebar(): void {
    const sidebar = document.getElementById('sidebar-wrapper');
    if (sidebar) {
      sidebar.classList.toggle('active');
    }
  }
}
