import { Component } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { Modal } from 'bootstrap';

@Component({
  selector: 'app-logout-modal',
  templateUrl: './logout-modal.component.html',
  styleUrls: ['./logout-modal.component.scss']
})
export class LogoutModalComponent {
  constructor(private authService: AuthService) {}

  confirmLogout(): void {
    this.authService.logout();
    const modalElement = document.getElementById('logoutModal');
    if (modalElement) {
      const modalInstance = Modal.getInstance(modalElement) as Modal;
      modalInstance?.hide();
    }
  }
}
