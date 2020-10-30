import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeepLearningRnnComponent } from './deep-learning-rnn.component';

describe('DeepLearningRnnComponent', () => {
  let component: DeepLearningRnnComponent;
  let fixture: ComponentFixture<DeepLearningRnnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeepLearningRnnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeepLearningRnnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
