import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatSliderChange } from '@angular/material/slider';

@Component({
  selector: 'app-amount-slider',
  templateUrl: './amount-slider.component.html',
  styleUrls: ['./amount-slider.component.scss'],
})
export class AmountSliderComponent {
  @Input() name = 'Slider';
  @Input() value = 0;
  @Input() max = 100;
  @Input() min = 0;

  @Output()
  input = new EventEmitter<MatSliderChange>();

  step = 1;
  thumbLabel = true;
}
