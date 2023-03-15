import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs';
import { STORAGE_APP_VERSION, STORAGE_TOKEN } from '../constants/core';
import { Token } from '../models/token';
import { StorageService } from './storage.service';

@Injectable()
export class AuthService {
  private token?: Token;

  constructor(
    private storageService: StorageService,
    private http: HttpClient,
    private router: Router
  ) {
    this.token = storageService.getData(STORAGE_TOKEN);
  }

  getToken(): Token | undefined {
    return this.token;
  }

  setToken(token: Token): void {
    const { image, email, username } = JSON.parse(
      atob(token.token.split('.')[1])
    );

    token.issued = Date.now();
    token.username = username;
    token.email = email;

    this.token = token;

    this.storageService.removeData(STORAGE_TOKEN);
    this.storageService.storeData(STORAGE_TOKEN, token);
  }

  login(email: string, password: string): Observable<any> {
    email = email.trim();
    return this.http.post<Token>(
      '/api/token',
      { grantType: 'credentials', email, password },
      { headers: { 'Content-type': 'application/json' } }
    ).pipe(map((response: any) => this.setToken(response)));

  }

  removeAuth(): void {
    this.token = undefined;
    let currentVersion = this.storageService.getData(STORAGE_APP_VERSION);
    localStorage.clear();
    if (currentVersion != null)
      this.storageService.storeData(STORAGE_APP_VERSION, currentVersion);
  }

  performRedirection(): void {
    this.router.navigate(['/dashboard']);
  }
}
