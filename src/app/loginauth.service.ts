import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginauthService {
  
  constructor() { }
  isLoggedIn: boolean = false;
    loggedInUserId: string | null = null;
    loggedInUserRole: string | null = null;
  
    login(user: any): boolean {
      this.isLoggedIn = true;
      this.loggedInUserId = user.id;
      this.loggedInUserRole = user.role;
      return true;
    }
  
    logout(): void {
      this.isLoggedIn = false;
      this.loggedInUserId = null;
      this.loggedInUserRole = null;
    }
  
    getIsLoggedIn(): boolean {
      return this.isLoggedIn;
    }
  
    getLoggedInUserId(): string | null {
      return this.loggedInUserId;
    }
  
    getLoggedInUserRole(): string | null {
      return this.loggedInUserRole;
    }

}
