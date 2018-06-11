import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor(private _http: HttpClient) { }

  

  public getUsers() {
    return this._http.get('https://jsonplaceholder.typicode.com/users')
  }

}
