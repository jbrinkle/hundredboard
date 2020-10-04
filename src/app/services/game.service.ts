import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private gameState$: Subject<boolean> = new Subject();
  private gameReset$: Subject<void> = new Subject();

  constructor() { }

  get gameStateChanges(): Observable<boolean> {
    return this.gameState$.asObservable();
  }

  get gameResets(): Observable<void> {
    return this.gameReset$.asObservable();
  }

  updateGameState(isOn: boolean) {
    this.gameState$.next(isOn);
  }

  resetGame() {
    this.gameReset$.next();
  }
}
