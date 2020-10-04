import { Component, OnInit } from '@angular/core';
import { ValueActivationService } from 'src/app/services/value-activation.service';

@Component({
  selector: 'app-value-activation-settings',
  templateUrl: './value-activation-settings.component.html',
  styleUrls: ['./value-activation-settings.component.scss']
})
export class ValueActivationSettingsComponent implements OnInit {

  factors: Array<number> = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 20, 25, 30, 35, 40, 45, 50, 100 ];
  activePrimary: number = 0;
  activeSecondary: number = 0;

  constructor(private factorActivationService: ValueActivationService) { }

  ngOnInit(): void {
  }

  activatePrimary(factor) {
    this.activePrimary = (this.activePrimary === factor)
      ? 0
      : factor;
    this.factorActivationService.setPrimary(this.activePrimary);
  }

  activateSecondary(factor) {
    this.activeSecondary = (this.activeSecondary === factor)
      ? 0
      : factor;
    this.factorActivationService.setSecondary(this.activeSecondary);
  }

}
