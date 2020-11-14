import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KmClusterComponent } from './km-cluster.component';

describe('KmClusterComponent', () => {
  let component: KmClusterComponent;
  let fixture: ComponentFixture<KmClusterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KmClusterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KmClusterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
