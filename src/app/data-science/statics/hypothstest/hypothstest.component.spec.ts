import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HypothstestComponent } from './hypothstest.component';

describe('HypothstestComponent', () => {
  let component: HypothstestComponent;
  let fixture: ComponentFixture<HypothstestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HypothstestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HypothstestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
