import { Component } from '@angular/core';
import {
  SingleSliderConfig,
  SliderCollectionConfig,
} from './slider-collection-config.definition';
import { MatSliderChange } from '@angular/material/slider';

@Component({
  selector: 'app-sliders-collection',
  templateUrl: './sliders-collection.component.html',
  styleUrls: ['./sliders-collection.component.scss'],
})
export class SlidersCollectionComponent {
  collectionConfig: SliderCollectionConfig = {
    globalMax: 0,
    sliders: [
      {
        name: 'Whole Grains',
        referenceValue: 811,
        referenceGram: 232,
        min: 0,
        max: 429.09,
      },
      {
        name: 'Potatoes, cassava',
        referenceValue: 39,
        referenceGram: 50,
        min: 0,
        max: 100,
      },
      {
        name: 'All vegetables',
        referenceValue: 78,
        referenceGram: 300,
        min: 200,
        max: 600,
      },
      {
        name: 'Fruits',
        referenceValue: 126,
        referenceGram: 200,
        min: 100,
        max: 300,
      },
      {
        name: 'Dairy Foods',
        referenceValue: 153,
        referenceGram: 250,
        min: 0,
        max: 500,
      },
      {
        name: 'Beef, Lamp, Pork',
        referenceValue: 30,
        referenceGram: 14,
        min: 0,
        max: 14,
      },
      {
        name: 'Chicken, other poultry',
        referenceValue: 62,
        referenceGram: 29,
        min: 0,
        max: 58,
      },
      {
        name: 'Eggs',
        referenceValue: 19,
        referenceGram: 13,
        min: 0,
        max: 25,
      },
      {
        name: 'Fish',
        referenceValue: 40,
        referenceGram: 28,
        min: 0,
        max: 100,
      },
      {
        name: 'Dry beans, lentils &peas',
        referenceValue: 172,
        referenceGram: 50,
        min: 0,
        max: 100,
      },
      {
        name: 'Soy foods',
        referenceValue: 112,
        referenceGram: 25,
        min: 0,
        max: 50,
      },
      {
        name: 'Nuts',
        referenceValue: 291,
        referenceGram: 50,
        min: 0,
        max: 75,
      },
      {
        name: 'Unsaturated oils',
        referenceValue: 447,
        referenceGram: 51.3,
        min: 20,
        max: 91.8,
      },
      {
        name: 'added sugar',
        referenceValue: 120,
        referenceGram: 31,
        min: 0,
        max: 31,
      },
    ],
  };

  sliderVals = this.collectionConfig.sliders.map(
    (slider) => slider.referenceValue
  );

  sumOfEnergy = this.getSumOfSliderVals();

  updateOtherSliders(adjustedSliderIdx: number, newSliderVal: number): void {
    const sliderValDiff = newSliderVal - this.sliderVals[adjustedSliderIdx];

    const isSliderAtLimit = (val: number, sliderConfig: SingleSliderConfig) => {
      const sliderValInGram =
        val / (sliderConfig.referenceValue / sliderConfig.referenceGram);
      return sliderValDiff > 0
        ? sliderValInGram <= sliderConfig.min
        : sliderValInGram >= sliderConfig.max;
    };
    const numOfOtherSliders = this.sliderVals.filter(
      (val, idx) =>
        idx !== adjustedSliderIdx &&
        !isSliderAtLimit(val, this.collectionConfig.sliders[idx])
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

    this.sumOfEnergy = this.getSumOfSliderVals();
  }

  private getSumOfSliderVals(): number {
    return Math.round(this.sliderVals.reduce((acc, val) => acc + val, 0));
  }
}
