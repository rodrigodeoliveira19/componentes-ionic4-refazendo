import { Component, OnInit } from '@angular/core';
import { ActionSheetController, AlertController, ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-app-todoconahack',
  templateUrl: './app-todoconahack.page.html',
  styleUrls: ['./app-todoconahack.page.scss'],
})
export class AppTodoconahackPage implements OnInit {

  public tasks: any[] = [];
  public tasksInp: boolean = false;

  constructor(
    private alertCtrl: AlertController,
    private toastCtrl: ToastController, 
    private actionSheetCtrl: ActionSheetController,
    private storage: Storage, 
  ) { }

  async ngOnInit() {
    await this.storage.create();

    this.loadingLocalStore(); 
    

  }

  loadingLocalStore(){
    this.storage.get('tasksDb').then(tasksJson => {
      if (tasksJson) {
        this.tasks = JSON.parse(tasksJson);
        console.log('tasks: '+this.tasks)
        //this.isEmpyTask();
      }
    }).catch(d => {
    });
  }

  async showAdd() {
    let alert = await this.alertCtrl.create({
      header: 'O que deseja fazer ?',
      inputs: [
        {
          name: 'taskToDo',
          type: 'text',
          placeholder: 'comprar pão'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: data => {
            console.log('cancelar');
          }
        },
        {
          text: 'Adicionar',
          handler: data => {
            console.log(data);
            this.add(data.taskToDo);
            this.updateLocalStorage();
          }
        }
      ]
    });

    await alert.present();
  }

  async add(taskTodo: string) {
    if (taskTodo.trim().length < 1) {
      const toast = await this.toastCtrl.create({
        message: 'Informar o que deseja fazer',
        duration: 2000,
        position: 'top'
      });

      toast.present();
      return;
    }

    let task = { nome: taskTodo, done: false };
    this.tasks.push(task);
    this.updateLocalStorage();
  }

  async openActions(task: any) {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'O que deseja fazer ?',
      buttons: [
        {
          text: task.done ? 'Desmarcar' : 'Marcar',
          icon: task.done ? 'radio-button-off' : 'checkmark-circle',
          handler: () => {
            task.done = !task.done;
            this.updateLocalStorage();
          }
        },
        {
          text: 'Canlelar',
          icon: 'close',
          role: 'cancel',
          handler: () => {
            console.log('Cancelado');
          }
        }
      ]
    });

    actionSheet.present();

  }

  updateLocalStorage() {
    //localStorage.setItem('tasksDb', JSON.stringify(this.tasks)); 
    this.storage.set('tasksDb', JSON.stringify(this.tasks));
    //this.isEmpyTask(); 
  }

  delete(task: any) {
    this.tasks.splice(this.tasks.indexOf(task), 1);
    this.updateLocalStorage();
  }

}
