import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Instalação', url: './instalacao', icon: 'home' },
    { title: 'Layout', url: '/layout', icon: 'mail' },
    { title: 'Componentes', url: '/componentes', icon: 'mail' },
    { title: 'App Todoconahack', url: '/app-todoconahack', icon: 'paper-plane' },
    { title: 'Api Externa', url: '/api-externa', icon: 'paper-plane' },
    { title: 'Geolocation', url: '/geolocation', icon: 'paper-plane' },
    { title: 'Favorites', url: '/folder/favorites', icon: 'heart' },
    { title: 'Archived', url: '/folder/archived', icon: 'archive' },
    { title: 'Trash', url: '/folder/trash', icon: 'trash' },
    { title: 'Spam', url: '/folder/spam', icon: 'warning' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
