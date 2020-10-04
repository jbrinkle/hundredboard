import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValueActivationSettingsComponent } from './value-activation-settings.component';

describe('ValueActivationSettingsComponent', () => {
  let component: ValueActivationSettingsComponent;
  let fixture: ComponentFixture<ValueActivationSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValueActivationSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValueActivationSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
