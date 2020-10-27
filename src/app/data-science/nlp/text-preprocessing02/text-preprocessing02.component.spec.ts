import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextPreprocessing02Component } from './text-preprocessing02.component';

describe('TextPreprocessing02Component', () => {
  let component: TextPreprocessing02Component;
  let fixture: ComponentFixture<TextPreprocessing02Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextPreprocessing02Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextPreprocessing02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
