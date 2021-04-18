export interface SingleSliderConfig {
  name: string;
  initialValue: number | 'equalShare';
  min: number;
  max: number;
}

export interface SliderCollectionConfig {
  globalMax: number;
  globalMin: number;
  sliders: SingleSliderConfig[];
}
