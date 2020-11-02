import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureEngnrngComponent } from './feature-engnrng.component';

describe('FeatureEngnrngComponent', () => {
  let component: FeatureEngnrngComponent;
  let fixture: ComponentFixture<FeatureEngnrngComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeatureEngnrngComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureEngnrngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
