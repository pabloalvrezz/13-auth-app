import { HttpClient } from '@angular/common/http';
import { Injectable, computed, inject, signal } from '@angular/core';

import { Observable, map, tap } from 'rxjs';

import { environment } from 'src/environments/environment';
import { AuthStatus, LoginResponse, User } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly baseUrl: string = environment.baseUrl;
  private http = inject(HttpClient);

  private _currentUser = signal<User | null>(null);
  private _authStatus = signal<AuthStatus>(AuthStatus.checking);

  public currentUser = computed(() => this._currentUser());
  public authStatus = computed(() => this._authStatus());

  constructor() { }

  // metodo que usaremos para loggear al usuario
  login(email: string, password: string): Observable<boolean> {

    const url = `${this.baseUrl}/auth/login`;
    const body = { email, password }

    return this.http.post<LoginResponse>(url, body)
      .pipe(
        tap(({ user, token }) => {
          // en caso de que todo salga bien asignaremos el usuario y el estado pasara a ser autenticado
          this._currentUser.set(user);
          this._authStatus.set(AuthStatus.auntenticated);
          localStorage.setItem('token', token);
          console.log({ user, token })
        }),
        map(() => true)

      );

    //TODO manejar errores

  }
}
