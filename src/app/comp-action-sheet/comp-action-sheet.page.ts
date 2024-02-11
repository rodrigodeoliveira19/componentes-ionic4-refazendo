import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-comp-action-sheet',
  templateUrl: './comp-action-sheet.page.html',
  styleUrls: ['./comp-action-sheet.page.scss'],
})
export class CompActionSheetPage implements OnInit {

  constructor(private actionSheetCtrl: ActionSheetController) { }

  ngOnInit() {
  }

  async abriActionSheet() {
    let actionSheet = await this.actionSheetCtrl.create({
      header: 'Album',
      buttons: [
        {
          text: 'Excluir',
          role: 'desctructive',
          icon: 'trash',
          handler: () => {
            console.log("Excluir...");
          }
        },
        {
          text: 'Editar',
          role: 'desctructive',
          icon: 'create',
          handler: () => {
            console.log("Editar...");
          }
        },
        {
          text: 'Compartilhar',
          icon: 'share',
          handler: () => {
            console.log("Compatilhando...");
          }
        },
        {
          text: 'Cancelar',
          icon: 'close',
          role: 'cancel',
          handler: () => {
            console.log("Cancelando...");
          }
        }
      ]
    });

    await actionSheet.present();
  }

}
