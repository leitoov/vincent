import { Component } from '@angular/core';
import { SessionService } from './api/session.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [{ title: 'Cerrar sesion', url: '/login', icon: 'mail' }];
  constructor(private session: SessionService) {}

  LogOut() {
    this.session.LogOut();
  }
}
