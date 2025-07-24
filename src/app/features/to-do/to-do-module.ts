import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToDoList } from './components/to-do-list/to-do-list.component';
import { TaskComponent } from './components/task/task.component';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TaskDetailDialogComponent } from './components/task-detail-dialog/task-detail-dialog';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { AddTaskDialog } from './components/add-task-dialog/add-task-dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [ToDoList, TaskComponent, TaskDetailDialogComponent, AddTaskDialog],
  imports: [
    CommonModule,
    DragDropModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [ToDoList]
})
export class ToDoModule {}
