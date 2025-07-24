import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskDetailDialog } from './task-detail-dialog';

describe('TaskDetailDialog', () => {
  let component: TaskDetailDialog;
  let fixture: ComponentFixture<TaskDetailDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TaskDetailDialog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskDetailDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
