import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatSliderChange } from '@angular/material/slider';

@Component({
  selector: 'app-amount-slider',
  templateUrl: './amount-slider.component.html',
  styleUrls: ['./amount-slider.component.scss'],
})
export class AmountSliderComponent {
  @Input()
  name = 'Slider';
  _value: number = 0;
  @Input()
  set value(val: number) {
    this._value = val;
  }
  @Output()
  input = new EventEmitter<MatSliderChange>();

  @Input()
  max = 100;

  min = 0;
  step = 1;
  thumbLabel = true;
}
