import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressBarControlComponent } from './progress-bar-control.component';

describe('ProgressBarControlComponent', () => {
  let component: ProgressBarControlComponent;
  let fixture: ComponentFixture<ProgressBarControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgressBarControlComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProgressBarControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
