import { Component, Output, EventEmitter, Input } from '@angular/core';

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

}
