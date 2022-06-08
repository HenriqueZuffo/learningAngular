import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  userName = 'Henrique';

  userData = {
    email: 'henrique@gmail.com',
    role: 'admin'
  }

  title = 'curso_angular';
}
