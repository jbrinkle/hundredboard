import { Component, OnInit, OnDestroy, Input, ComponentFactoryResolver } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { GameService } from 'src/app/services/game.service';
import { ValueActivationService } from 'src/app/services/value-activation.service';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.scss']
})
export class CellComponent implements OnInit, OnDestroy {

  private primaryActivations: Subscription;
  private secondaryActivations: Subscription;
  private gameStateChanges: Subscription;
  private gameResets: Subscription;

  @Input() value: number;

  highlightPrimary: boolean = false;
  highlightSecondary: boolean = false;
  highlightBoth: boolean = false;
  gameModeEnabled: boolean = false;
  isClicked: boolean = false;

  constructor(private factorActivationService: ValueActivationService,
              private gameService: GameService) { }

  ngOnInit(): void {
    this.primaryActivations = this.factorActivationService.primaryActivations.subscribe(f => {
      this.highlightPrimary = f && this.value % f === 0;
      this.highlightBoth = this.highlightPrimary && this.highlightSecondary;
    });
    this.secondaryActivations = this.factorActivationService.secondaryActivations.subscribe(f => {
      this.highlightSecondary = f && this.value % f === 0;
      this.highlightBoth = this.highlightPrimary && this.highlightSecondary;
    });

    this.gameStateChanges = this.gameService.gameStateChanges.subscribe(gameOn => {
      this.gameModeEnabled = gameOn;
      this.isClicked = false;
    });
    this.gameResets = this.gameService.gameResets.subscribe(() => {
      this.isClicked = false;
    });
  }

  ngOnDestroy(): void {
    this.primaryActivations.unsubscribe();
    this.secondaryActivations.unsubscribe();
    this.gameStateChanges.unsubscribe();
    this.gameResets.unsubscribe();
  }

  showGameHighlight() {
    this.isClicked = true;
  }

}
