import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioServiceService {

  constructor(private http: HttpClient) { }

  get(): any {
    var url = "http://jsonplaceholder.typicode.com/posts/1";
    return this.http.get(url)
  }
}
