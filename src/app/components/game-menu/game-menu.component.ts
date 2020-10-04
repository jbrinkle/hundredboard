import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-game-menu',
  templateUrl: './game-menu.component.html',
  styleUrls: ['./game-menu.component.scss']
})
export class GameMenuComponent implements OnInit {

  @Input() isMenuOpen: boolean;
  @Output() isMenuOpenChange: EventEmitter<boolean> = new EventEmitter();

  nextToggleState: string = 'on';
  isGameModeEnabled: boolean = false;

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
  }

  toggleGameMode() {
    this.isGameModeEnabled = !this.isGameModeEnabled;
    this.nextToggleState = this.isGameModeEnabled ? 'off' : 'on';

    if (!this.isGameModeEnabled) {
      // game mode disabled... do reset
      this.gameService.resetGame();
    }
    this.gameService.updateGameState(this.isGameModeEnabled);
    this.closeMenu();
  }

  resetGame() {
    if (!this.isGameModeEnabled) { return; }
    this.gameService.resetGame();
    this.closeMenu();
  }

  closeMenu() {
    this.isMenuOpen = false;
    this.isMenuOpenChange.emit(false);
  }
}
