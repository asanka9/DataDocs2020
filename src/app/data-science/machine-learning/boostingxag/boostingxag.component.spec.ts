import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoostingxagComponent } from './boostingxag.component';

describe('BoostingxagComponent', () => {
  let component: BoostingxagComponent;
  let fixture: ComponentFixture<BoostingxagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoostingxagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoostingxagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
