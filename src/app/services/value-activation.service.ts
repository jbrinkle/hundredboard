import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ValueActivationService {

  primary$: Subject<number> = new Subject();
  secondary$: Subject<number> = new Subject();

  constructor() { }

  setPrimary(factor) {
    this.primary$.next(factor);
  }

  setSecondary(factor) {
    this.secondary$.next(factor);
  }
}
