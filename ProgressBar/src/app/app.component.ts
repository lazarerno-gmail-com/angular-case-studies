import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressBarControlComponent } from './progress-bar-control/progress-bar-control.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProgressBarControlComponent, MatProgressBarModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ProgressBar';
  percentageStr = "This is a percentage";
}
