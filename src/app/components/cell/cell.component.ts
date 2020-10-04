import { Component, OnInit, OnDestroy, Input, ComponentFactoryResolver } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ValueActivationService } from 'src/app/services/value-activation.service';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.scss']
})
export class CellComponent implements OnInit, OnDestroy {

  private primaryActivations: Subscription;
  private secondaryActivations: Subscription;

  @Input() value: number;

  highlightPrimary: boolean = false;
  highlightSecondary: boolean = false;
  highlightBoth: boolean = false;

  constructor(private factorActivationService: ValueActivationService) { }

  ngOnInit(): void {
    this.primaryActivations = this.factorActivationService.primaryActivations.subscribe(f => {
      this.highlightPrimary = f && this.value % f === 0;
      this.highlightBoth = this.highlightPrimary && this.highlightSecondary;
    });
    this.secondaryActivations = this.factorActivationService.secondaryActivations.subscribe(f => {
      this.highlightSecondary = f && this.value % f === 0;
      this.highlightBoth = this.highlightPrimary && this.highlightSecondary;
    });
  }

  ngOnDestroy(): void {
    this.primaryActivations.unsubscribe();
    this.secondaryActivations.unsubscribe();
  }

}
