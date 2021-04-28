import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  urlInicial = "http://localhost:4200/user"

  constructor(private http: HttpClient) { }

  ler(): Observable<User[]>{
    console.log("estive aqui")
    return this.http.get<User[]>(this.urlInicial)
  }
}
