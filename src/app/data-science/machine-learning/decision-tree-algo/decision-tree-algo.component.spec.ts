import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DecisionTreeAlgoComponent } from './decision-tree-algo.component';

describe('DecisionTreeAlgoComponent', () => {
  let component: DecisionTreeAlgoComponent;
  let fixture: ComponentFixture<DecisionTreeAlgoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DecisionTreeAlgoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DecisionTreeAlgoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
