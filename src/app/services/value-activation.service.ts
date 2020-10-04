import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ValueActivationService {

  private primary$: Subject<number> = new Subject();
  private secondary$: Subject<number> = new Subject();

  constructor() { }

  get primaryActivations(): Observable<number> {
    return this.primary$.asObservable();
  }

  get secondaryActivations(): Observable<number> {
    return this.secondary$.asObservable();
  }

  setPrimary(factor) {
    this.primary$.next(factor);
  }

  setSecondary(factor) {
    this.secondary$.next(factor);
  }
}
