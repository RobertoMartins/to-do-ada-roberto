import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TaskDetailDialogComponent } from '../task-detail-dialog/task-detail-dialog';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

export interface Task {
  title: string;
  description: string;
  completed: boolean;
}

@Component({
  selector: 'app-task-component',
  standalone: false,
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss',
})
export class TaskComponent {
  @Input() task!: Task;

  @Output()
  checkChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Output()
  onDelete: EventEmitter<Task> = new EventEmitter<Task>();

  hover = false;
  private dialog = inject(MatDialog);
  private _snackBar = inject(MatSnackBar);

  openDetailDialog(): void {
    this.dialog.open(TaskDetailDialogComponent, {
      data: this.task,
    });
  }

  openAlert(): void {
    const config: MatSnackBarConfig = {
      duration: 2000,
    };
    if (!this.task.completed) {
      this._snackBar.open("Tarefa retornada para 'A Fazer'.", '', config);
    } else {
      this._snackBar.open('Tarefa concluída com sucesso.', '', config);
    }
  }

  actionDelete(): void {
    this.onDelete.emit(this.task);

    const config: MatSnackBarConfig = {
      duration: 2000,
    };

    this._snackBar.open("Tarefa excluída com sucesso.", '', config);
  }
}
