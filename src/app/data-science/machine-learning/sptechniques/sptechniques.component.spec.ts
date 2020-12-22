import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SptechniquesComponent } from './sptechniques.component';

describe('SptechniquesComponent', () => {
  let component: SptechniquesComponent;
  let fixture: ComponentFixture<SptechniquesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SptechniquesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SptechniquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
