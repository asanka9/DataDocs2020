import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KnnAlgoComponent } from './knn-algo.component';

describe('KnnAlgoComponent', () => {
  let component: KnnAlgoComponent;
  let fixture: ComponentFixture<KnnAlgoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KnnAlgoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KnnAlgoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
