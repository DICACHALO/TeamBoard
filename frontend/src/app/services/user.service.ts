import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private env: string;
  constructor(private _http: HttpClient) {
    this.env = environment.APP_URL;
  }

  registerUser(user: any) {
    return this._http.post<any>(this.env + 'user/registerUser', user);
  }

  login(user: any) {
    return this._http.post<any>(this.env + 'user/login', user);
  }

  // Para saber si un uusario está logueado o no
  loggedIn(){
    return !!localStorage.getItem('token'); //Validación solo cuando quiero saber si es true o false
  }

  // Para obtener el token que está guardado
  getToken(){
    return localStorage.getItem('token');
  }
}
