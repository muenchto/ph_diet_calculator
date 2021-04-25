import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { MatSliderChange } from '@angular/material/slider';

@Component({
  selector: 'app-amount-slider',
  templateUrl: './amount-slider.component.html',
  styleUrls: ['./amount-slider.component.scss'],
})
export class AmountSliderComponent implements OnChanges {
  public _sliderVal = 0;
  @Input() name = 'Slider';
  @Input() valueInCal = 0;
  @Input() calPerGram = 0;
  @Input() max = 100;
  @Input() min = 0;

  @Output()
  updatedValueInCal = new EventEmitter<number>();

  step = 1;
  thumbLabel = true;
  displayWith = (value: number | null) => `${value}g`;

  emitValueInCal(newValue: MatSliderChange) {
    if (newValue.value === null) return;
    this.updatedValueInCal.emit(newValue.value * this.calPerGram);
  }

  ngOnChanges(changes: SimpleChanges) {
    this.updateSliderVal();
  }

  updateSliderVal() {
    this._sliderVal = this.calPerGram ? this.valueInCal / this.calPerGram : 0;
  }
}
