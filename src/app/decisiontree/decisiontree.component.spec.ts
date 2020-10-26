import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DecisiontreeComponent } from './decisiontree.component';

describe('DecisiontreeComponent', () => {
  let component: DecisiontreeComponent;
  let fixture: ComponentFixture<DecisiontreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DecisiontreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DecisiontreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
