import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnsembleTechniquesComponent } from './ensemble-techniques.component';

describe('EnsembleTechniquesComponent', () => {
  let component: EnsembleTechniquesComponent;
  let fixture: ComponentFixture<EnsembleTechniquesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnsembleTechniquesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnsembleTechniquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
