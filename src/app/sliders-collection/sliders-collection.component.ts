import { Component } from '@angular/core';
import {
  SingleSliderConfig,
  SliderCollectionConfig,
} from './slider-collection-config';
import { MatSliderChange } from '@angular/material/slider';

@Component({
  selector: 'app-sliders-collection',
  templateUrl: './sliders-collection.component.html',
  styleUrls: ['./sliders-collection.component.scss'],
})
export class SlidersCollectionComponent {
  collectionConfig: SliderCollectionConfig = {
    globalMax: 100,
    globalMin: 100,
    sliders: [
      {
        name: 'Gemüse',
        initialValue: 'equalShare',
        min: 0,
        max: 100,
      },
      {
        name: 'Fleisch',
        initialValue: 'equalShare',
        min: 0,
        max: 100,
      },
      {
        name: 'Fisch',
        initialValue: 'equalShare',
        min: 0,
        max: 100,
      },
      {
        name: 'Milchprodukte',
        initialValue: 'equalShare',
        min: 0,
        max: 100,
      },
      {
        name: 'Hülsenfrüchte',
        initialValue: 'equalShare',
        min: 0,
        max: 100,
      },
    ],
  };

  sliderVals = this.collectionConfig.sliders.map((slider) =>
    slider.initialValue === 'equalShare'
      ? this.collectionConfig.globalMax / this.collectionConfig.sliders.length
      : slider.initialValue
  );

  actualGlobal = this.collectionConfig.globalMax;

  updateSliders(
    adjustedSliderIdx: number,
    sliderChange: MatSliderChange
  ): void {
    if (sliderChange.value === null) {
      return;
    }
    const sliderValDiff =
      sliderChange.value - this.sliderVals[adjustedSliderIdx];

    const isSliderAtLimit = (val: number, sliderConfig: SingleSliderConfig) =>
      sliderValDiff > 0 ? val <= sliderConfig.min : val >= sliderConfig.max;

    const numOfOtherSliders = this.sliderVals
      .filter((_, idx) => idx !== adjustedSliderIdx)
      .filter(
        (val, idx) => !isSliderAtLimit(val, this.collectionConfig.sliders[idx])
      ).length;

    const diffForOtherSliders = sliderValDiff / numOfOtherSliders;

    this.sliderVals = this.sliderVals.map((val, idx) => {
      if (idx === adjustedSliderIdx) {
        return val + sliderValDiff;
      } else if (!isSliderAtLimit(val, this.collectionConfig.sliders[idx])) {
        return val - diffForOtherSliders;
      } else {
        return val;
      }
    });
    console.log(this.sliderVals);

    this.actualGlobal = this.sliderVals.reduce((acc, val) => acc + val, 0);
  }
}
