import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Task } from '../task/task.component';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-task-dialog',
  standalone: false,
  templateUrl: './add-task-dialog.html',
  styleUrl: './add-task-dialog.scss',
})
export class AddTaskDialog {
  form!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<AddTaskDialog>,
    @Inject(MAT_DIALOG_DATA) public data: { title: string }
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      title: [''],
      desc: [''],
    });
  }

  onSave(): void {
    if (this.form.valid) {
    const title = this.form.get('title')?.value;
    const description = this.form.get('desc')?.value;
    
    const task: Task = {title,description, completed: false}
      this.dialogRef.close(task);
    }
  }

  onClose(): void {
    this.dialogRef.close();
  }
}
