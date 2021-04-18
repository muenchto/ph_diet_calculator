import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidersCollectionComponent } from './sliders-collection.component';

describe('SlidersCollectionComponent', () => {
  let component: SlidersCollectionComponent;
  let fixture: ComponentFixture<SlidersCollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlidersCollectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlidersCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
