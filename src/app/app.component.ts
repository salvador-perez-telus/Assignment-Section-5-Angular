import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
    public numberToSend: number;

    public refresh(event: number): void {
      this.numberToSend = event;
    }
}
