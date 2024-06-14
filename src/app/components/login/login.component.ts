import { Component } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service'; // Certifique-se de que o caminho está correto

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService) { }

  onLogin(): void {
    if (!this.authService.login(this.username, this.password)) {
      this.errorMessage = 'Usuário ou senha inválida';
    } else {
      this.errorMessage = ''; 
    }
  }
}
