import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Task } from '../task/task.component';

@Component({
  selector: 'app-task-detail-dialog',
  standalone: false,
  templateUrl: './task-detail-dialog.html',
  styleUrl: './task-detail-dialog.scss'
})
export class TaskDetailDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: Task) {}
}
