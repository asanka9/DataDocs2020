import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegressionAlgorithmsComponent } from './regression-algorithms.component';

describe('RegressionAlgorithmsComponent', () => {
  let component: RegressionAlgorithmsComponent;
  let fixture: ComponentFixture<RegressionAlgorithmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegressionAlgorithmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegressionAlgorithmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
