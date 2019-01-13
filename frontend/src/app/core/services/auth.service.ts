import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BASE_API_URL, LOGIN_ROUTE, REGISTER_ROUTE } from '../types/api';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  public login(email: string, password: string): Observable<any> {
    const body = { email, password };
    const url = `${BASE_API_URL}/${LOGIN_ROUTE}`;

    // get session id
    return this.http.post(url, body);
  }

  public register(email: string, password: string): Observable<any> {
    const body = { email, password };
    const url = `${BASE_API_URL}/${REGISTER_ROUTE}`;
    return this.http.post(url, body);
  }
}