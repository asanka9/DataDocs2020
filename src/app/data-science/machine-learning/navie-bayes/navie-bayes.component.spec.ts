import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavieBayesComponent } from './navie-bayes.component';

describe('NavieBayesComponent', () => {
  let component: NavieBayesComponent;
  let fixture: ComponentFixture<NavieBayesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavieBayesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavieBayesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
