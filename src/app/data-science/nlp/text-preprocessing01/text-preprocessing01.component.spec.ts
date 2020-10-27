import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextPreprocessing01Component } from './text-preprocessing01.component';

describe('TextPreprocessing01Component', () => {
  let component: TextPreprocessing01Component;
  let fixture: ComponentFixture<TextPreprocessing01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextPreprocessing01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextPreprocessing01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
