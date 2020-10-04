import { Component, ElementRef, ViewChild } from '@angular/core';
import { GameMenuComponent } from './components/game-menu/game-menu.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = '100Board';
  isGameMenuOpen = false;

  toggleGameMenu() {
    this.isGameMenuOpen = !this.isGameMenuOpen;
  }
}
