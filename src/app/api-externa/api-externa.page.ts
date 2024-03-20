import { Component, OnInit } from '@angular/core';
import { UsuarioServiceService } from '../usuario-service.service';

@Component({
  selector: 'app-api-externa',
  templateUrl: './api-externa.page.html',
  styleUrls: ['./api-externa.page.scss'],
})
export class ApiExternaPage implements OnInit {

  resultadoGet: any
  resultadoPost: any
  resultadoPut: any
  resultadoDelete: any

  constructor(private usuarioServiceService: UsuarioServiceService) { }

  ngOnInit() {
  }

  get() {
    this.usuarioServiceService.get().subscribe((data: any) => {
      this.resultadoGet = JSON.stringify(data)
    });
  }

  post() {
    this.usuarioServiceService.post().subscribe((data: any) => {
      this.resultadoPost = JSON.stringify(data)
    });
  }

  put() {
    this.usuarioServiceService.put().subscribe((data: any) => {
      this.resultadoPut = JSON.stringify(data)
    });
  }

  delete() {
    this.usuarioServiceService.delete().subscribe((data: any) => {
      this.resultadoDelete = JSON.stringify(data)
    });
  }

}
