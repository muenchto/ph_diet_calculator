import {Component, ElementRef, OnInit} from '@angular/core';
import {OverlayContainer} from '@angular/cdk/overlay';
import {MatSliderChange} from "@angular/material/slider";

interface SliderData {

  name: string;
  value: number;
  min: number;
  max: number;

}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  globalMax = 100;
  localMin = 0;
  localMax = 100;
  numOfSlider = 5;
  localEqu = this.globalMax / this.numOfSlider;
  sliders: SliderData[] = [...Array(this.numOfSlider).keys()]
    .map((i) => (
        {
          name: 'Slider ' + i,
          value: this.localEqu,
          min: this.localMin,
          max: this.localMax,
        }
      )
    );
  actualGlobal = this.globalMax;


  updateSliders(adjustedSliderIdx: number, sliderChange: MatSliderChange): void {
    if (sliderChange.value === null) {
      return;
    }
    const sliderValDiff = sliderChange.value - this.sliders[adjustedSliderIdx].value;

    const isSliderAtLimit = (slider: SliderData) => sliderValDiff > 0 ? slider.value <= slider.min : slider.value >= slider.max;

    const numOfOtherSliders = this.sliders
      .filter((slider, idx) => idx !== adjustedSliderIdx)
      .filter(slider => !isSliderAtLimit(slider))
      .length ;

    const diffForOtherSliders = sliderValDiff / numOfOtherSliders;

    this.sliders.forEach((slider, idx) => {
      if (idx === adjustedSliderIdx) {
        slider.value += sliderValDiff;
      }
      else if (!isSliderAtLimit(slider)){
        slider.value -= diffForOtherSliders;
      }
    });

    this.actualGlobal = this.sliders.map(sl => sl.value).reduce((acc, val) => acc + val, 0);
  }
}
