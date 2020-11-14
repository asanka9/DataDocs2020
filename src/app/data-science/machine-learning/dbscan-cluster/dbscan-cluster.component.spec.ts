import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DbscanClusterComponent } from './dbscan-cluster.component';

describe('DbscanClusterComponent', () => {
  let component: DbscanClusterComponent;
  let fixture: ComponentFixture<DbscanClusterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DbscanClusterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DbscanClusterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
