import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedIn = false;
  private role: string | null = null;

  /**
   * Attempts to log in the user by callign the server's login endpoint
   * @param username The username to log in with
   * @param password The password to log in with
   * @returns A promise that resolves to true if the login was successful, false otherwise
   */
  login(username: string, password: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.httpClient.post('https://api.example.com/login', {username, password})
      .subscribe({
        next: (data: any) => {
          // Response from server will contain a field that determines authorization success
          if (data.isAuthenticated) {
            this.isLoggedIn = true; // Set logged in status
            this.role = data.role; // Determine active user role
            resolve(true);
          }
          else {
            this.isLoggedIn = false; // Set logged in status
            resolve(false);
          }
        },
        error: (error) => {
          console.error('Login error: ', error);
          reject(error);
        }
      })
    });
  }

  /**
   * Logs the user out by setting the logged in status to false and clearing the role
   */
  logout() {
    this.isLoggedIn = false;
    this.role = null;
  }

  /**
   * Used to determine whether the user is currently logged in.
   * This only checks if the user is logged in at all. To verify the users access level, use hasRole with a specific role.
   * @returns True if the user is logged in, false otherwise
   */
  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }

  /**
   * Used to determine whether the user has a specific role.
   * @param role The role to check for
   * @returns True if the user has the specified role, false otherwise
   */
  hasRole(role: string): boolean {
    return this.role === role;
  }

  constructor(private httpClient: HttpClient) { }
}
