import { Component, Output, EventEmitter, Input } from '@angular/core';
import * as bootstrap from 'bootstrap';

import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Output() toggleSidebarEvent = new EventEmitter<void>();
  @Input() showToggle: boolean = true;

  constructor(private authService: AuthService) {}

  toggleSidebar(): void {
    this.toggleSidebarEvent.emit();
  }

  onLogout(): void {
    this.authService.logout();
  }
  confirmLogout(): void {
    this.authService.logout();
    const modalElement = document.getElementById('logoutModal');
    if (modalElement) {
      const modalInstance = bootstrap.Modal.getInstance(modalElement);
      modalInstance?.hide();
    }
  }
}
