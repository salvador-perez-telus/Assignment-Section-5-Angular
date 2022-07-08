import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControl{
    @Output() numberEmitter:EventEmitter<number> = new EventEmitter<number>();

    public valueEmitted : number = 0;
    public interval: any;
    public isStartDisabled: boolean = false;
    public isPauseDisabled: boolean = true;

    public emitValue(): void  {
        this.numberEmitter.emit(++this.valueEmitted);
    }

    public triggerSetInterval(): void {
        this.isStartDisabled = true;
        this.isPauseDisabled = false;
        this.interval = setInterval(() => {
            this.emitValue();
        }, 1000);
    }

    public stopInterval(): void {
        this.isStartDisabled = false;
        this.isPauseDisabled = true;
        clearInterval(this.interval);
    }
}