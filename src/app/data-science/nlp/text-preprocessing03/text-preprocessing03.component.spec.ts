import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextPreprocessing03Component } from './text-preprocessing03.component';

describe('TextPreprocessing03Component', () => {
  let component: TextPreprocessing03Component;
  let fixture: ComponentFixture<TextPreprocessing03Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextPreprocessing03Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextPreprocessing03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
