import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-comp-alert',
  templateUrl: './comp-alert.page.html',
  styleUrls: ['./comp-alert.page.scss'],
})
export class CompAlertPage implements OnInit {

  private nome : string ="Rodrigo Silva"; 

  constructor(private alertCtrl: AlertController) { }

  ngOnInit() {
  }

  async abrirAlertSimples() {
    let alertSimples = await this.alertCtrl.create({
      header: 'Alert Simples',
      subHeader: 'Alert',
      message: 'Alert criado com sucesso',
      buttons: ['Ok']
    });

    await alertSimples.present();
  }

  async abrirAlertMultButtons() {
    let alertButtons = await this.alertCtrl.create({
      header: 'Alert Buttons',
      message: 'Alert com varios Botões',
      buttons: [{
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'secondary',
        handler: (blah) => {
          console.log(this.nome);
          console.log(blah);
        }
      }, 'Abrir Model', 'Excluir']
    });

    await alertButtons.present();
  }

  async abrirAlertConfirmacao() {
    let alert = await this.alertCtrl.create({
      header: 'Confirmação',
      message: 'Deseja cancelar o pedido <b>XPTO</b> ?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Cancelar');
          }
        },
        {
          text: 'Confirmar',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirmar');
          }
        }
      ]
    });

    await alert.present();

  }

  async abrirAlertImput() {
    let alert = await this.alertCtrl.create({
      header: 'Acesso restrito',
      inputs: [
        {
          name: 'login',
          type: 'text',
          placeholder: 'Informe seu login'
        },
        {
          name: 'senha',
          type: 'password',
          placeholder: 'Informe sua senha'
        }
      ],
      buttons: [
        {
          text: 'Novo',
          role: 'cancel',
          handler: data => {
            console.log('Criar novo');
          }
        },
        {
          text: 'Entrar',
          handler: data => {
            console.log('Entrar ' + data.login);
            console.log('Entrar ' + data.senha);
          }
        }
      ]
    });

    await alert.present();
  }

}
