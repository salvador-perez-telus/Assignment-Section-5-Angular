import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { GameControl } from 'src/game-control/game-control.component';
import { NumberDisplay } from 'src/number-display/number-display.component';

@NgModule({
  declarations: [
    AppComponent,
    GameControl,
    NumberDisplay
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
