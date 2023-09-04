import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: `navbar.component.html`
})
export class NavbarComponent {

  // Cette variable ce change a la connexion
  isConnected: number = 0;
}
