import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router) { }

  onLogin(): void {
    if (this.username && this.password) {
      localStorage.setItem('username', this.username);
      this.router.navigate(['/profile']);
    }
  }
}
