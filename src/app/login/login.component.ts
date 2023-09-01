import { Component } from '@angular/core';
import { LoginService } from '../login.service';
import { LoginauthService } from '../loginauth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  loginError: boolean = false;
  isLoggedIn: boolean = false;

  constructor(
    private userService: LoginService,
    private authService: LoginauthService,
    private router: Router
  ) {}
  isMatchingUser(user: any, email: string, password: string): boolean {
    return user.email === email && user.password === password;
  }
  login() {
    // this.userService.getUsers().subscribe(response => {
    //   const users = response.users;
    //   const user = users.find((u: { email: string; password: string }) => u.email === this.email && u.password === this.password);
    this.userService.getUsers().subscribe(users => {
      const user = users.find((u: any) => this.isMatchingUser(u, this.email, this.password));
      if (user) {
        if (this.authService.login(user)) {
          this.isLoggedIn = true;
          if (user.role === 'admin') {
            this.router.navigate(['/admin']);//check your admin route
            sessionStorage.setItem('id', user.id);
          } else {
            this.router.navigate(['/dashboard']);
            sessionStorage.setItem('id', user.id);
          }
        }
      } else {
        // Show "Invalid username or password"
        this.loginError = true;
      }
    }
  );
  }

  goToHomePage() {
    this.router.navigate(['/']);
  }

}
