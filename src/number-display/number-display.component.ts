import { Component, DoCheck, Input } from '@angular/core';

@Component({
  selector: 'number-display',
  templateUrl: './number-display.component.html',
  styleUrls: ['./number-display.component.css']
})
export class NumberDisplay implements DoCheck{

    @Input() numberToDisplay: number;

    public isOdd = false;
    public isEven = false;

    ngOnInit(){
        this.isEvenOdd();
    }

    ngDoCheck(){
        this.isEvenOdd();
    }

    public isEvenOdd (): void {
        if(!this.numberToDisplay || this.numberToDisplay === 0){
            this.isEven = false;
            this.isOdd = false;
        }else if(this.numberToDisplay % 2 === 0) {
            this.isEven = true;
            this.isOdd = false;
        }else {
            this.isEven = false;
            this.isOdd = true;
        }
    }

}