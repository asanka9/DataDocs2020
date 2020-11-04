import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferLearningComponent } from './transfer-learning.component';

describe('TransferLearningComponent', () => {
  let component: TransferLearningComponent;
  let fixture: ComponentFixture<TransferLearningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransferLearningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferLearningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
