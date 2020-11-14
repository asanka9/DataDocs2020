import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HClusterComponent } from './h-cluster.component';

describe('HClusterComponent', () => {
  let component: HClusterComponent;
  let fixture: ComponentFixture<HClusterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HClusterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HClusterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
