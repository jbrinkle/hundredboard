import { Component, OnInit, OnDestroy, Input, ComponentFactoryResolver } from '@angular/core';
import { ValueActivationService } from 'src/app/services/value-activation.service';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.scss']
})
export class CellComponent implements OnInit, OnDestroy {

  @Input() value: number;

  highlightPrimary: boolean = false;
  highlightSecondary: boolean = false;
  highlightBoth: boolean = false;

  constructor(private factorActivationService: ValueActivationService) { }

  ngOnInit(): void {
    this.factorActivationService.primary$.subscribe(f => {
      this.highlightPrimary = f && this.value % f === 0;
      this.highlightBoth = this.highlightPrimary && this.highlightSecondary;
    });
    this.factorActivationService.secondary$.subscribe(f => {
      this.highlightSecondary = f && this.value % f === 0;
      this.highlightBoth = this.highlightPrimary && this.highlightSecondary;
    });
  }

  ngOnDestroy(): void {
    this.factorActivationService.primary$.unsubscribe();
    this.factorActivationService.secondary$.unsubscribe();
  }

}
