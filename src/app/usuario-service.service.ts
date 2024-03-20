import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http'; 

@Injectable({
  providedIn: 'root'
})
export class UsuarioServiceService {

  constructor(private http: HttpClient) { }

  url = "http://jsonplaceholder.typicode.com/posts";
  headers = new HttpHeaders()
  .set('Content-Type', 'application/json')
  .set('Access-Control-Allow-Origin','http://localhost:8100')

  get(): any {
    return this.http.get(this.url+"/1")
  }

  post(): any {
    let item = { userId: 100, id: 1, title: 'Rodrigosunt title', body: 'Rodrigo Body' };
    return this.http.post(this.url, item,   {headers: this.headers} )
  }

  put(): any {
    let item = { userId: 100, id: 1, title: 'Rodrigosunt title', body: 'Rodrigo Body' };
    return this.http.put(this.url+"/100", item, {headers: this.headers})
  }

  delete(): any {
    return this.http.delete(this.url+"/100")
  }
}
