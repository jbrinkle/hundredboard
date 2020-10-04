import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CellComponent } from './components/cell/cell.component';
import { BoardComponent } from './components/board/board.component';
import { ValueActivationSettingsComponent } from './components/value-activation-settings/value-activation-settings.component';

@NgModule({
  declarations: [
    AppComponent,
    CellComponent,
    BoardComponent,
    ValueActivationSettingsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
