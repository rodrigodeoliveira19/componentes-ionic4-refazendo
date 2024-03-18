import { Component, OnInit } from '@angular/core';
import { UsuarioServiceService } from '../usuario-service.service';

@Component({
  selector: 'app-api-externa',
  templateUrl: './api-externa.page.html',
  styleUrls: ['./api-externa.page.scss'],
})
export class ApiExternaPage implements OnInit {

  resultado: any

  constructor(private usuarioServiceService: UsuarioServiceService) { }

  ngOnInit() {
  }

  get() {
    this.usuarioServiceService.get().subscribe((data: any) => {
      this.resultado = JSON.stringify(data)
    });
  }

  post() {
    alert("post")
  }

  put() {
    alert("put")
  }

  delete() {
    alert("delete")
  }

}
