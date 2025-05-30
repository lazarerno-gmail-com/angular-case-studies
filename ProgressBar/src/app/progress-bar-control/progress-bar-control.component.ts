import { Component, Input } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'app-progress-bar-control',
  standalone: true,
  imports: [
      //BrowserAnimationsModule,
      MatProgressBarModule
    ],
  templateUrl: './progress-bar-control.component.html',
  styleUrl: './progress-bar-control.component.scss'
})
export class ProgressBarControlComponent {
  @Input() tooltip: string = "";
  @Input() showValue: boolean = true;
  @Input() valueType: ValueType = ValueType.Percentage;
  @Input({ required: true }) set maxValue(maxValue: number) {
    this.max = maxValue;
    this.calculateProgress();
  };
  @Input({ required: true }) set currentValue(currentValue: number) {
    this.value = currentValue;
    this.calculateProgress();
  }
  @Input() set height(height: string) {
    this.progressBarHeight = height;
  }
  @Input() set color(color: string) {
    this.progressColor = color;
  }
  @Input() set backgroundColor(backgroundColor: string) {
    this.progressBackgroundColor = backgroundColor;
  }
  
  progressBarHeight = "24px";
  progressColor = "";
  progressBackgroundColor = "";
  progress = 0;
  value = 0;
  max = 0;

  calculateProgress(){
    if(this.max === 0) {
      this.progress = 0;
      return;
    }
    this.progress = Math.round((this.value / this.max) * 100);
  }
}

export enum ValueType {
  Percentage = 0,
  Ratio = 1
}
