export interface SingleSliderConfig {
  name: string;
  referenceValue: number;
  referenceGram: number;
  min: number;
  max: number;
}

export interface SliderCollectionConfig {
  globalMax: number;
  sliders: SingleSliderConfig[];
}
