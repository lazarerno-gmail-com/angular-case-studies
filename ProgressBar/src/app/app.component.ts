import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressBarControlComponent } from './progress-bar-control/progress-bar-control.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProgressBarControlComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ProgressBar';
  percentageStr = "This is a percentage";
}
