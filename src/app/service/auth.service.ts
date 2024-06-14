import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false;

  constructor(private router: Router) {

    const user = localStorage.getItem('user');
    if (user) {
      this.isAuthenticated = true;
    }
  }

  login(username: string, password: string): boolean {
    if (username === '123' && password === '123') {
      this.isAuthenticated = true;
      localStorage.setItem('user', username);
      this.router.navigate(['/']); 
      return true;
    }
    return false;
  }

  logout(): void {
    this.isAuthenticated = false;
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }
}
