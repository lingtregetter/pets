import { Injectable } from '@angular/core';
import { HttpClientService } from './http-client.service';
import { User } from '../interfaces/user.interface';
import { AuthenticatedUser } from '../interfaces/authenticated-user.interface';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly sessionKey = 'user';
  authenticatedUser?: AuthenticatedUser;

  constructor(private readonly httpClientService: HttpClientService) {}

  public isAuthenticated(): boolean {
    const session = sessionStorage.getItem(this.sessionKey);
    if (!session) {
      return false;
    }

    this.authenticatedUser = JSON.parse(session);
    return true;
  }

  async login(user: User) {
    const response = await this.httpClientService.post<AuthenticatedUser>(
      '/login',
      user
    );
    this.authenticatedUser = response;
    sessionStorage.setItem(
      this.sessionKey,
      JSON.stringify(this.authenticatedUser)
    );
  }
}
