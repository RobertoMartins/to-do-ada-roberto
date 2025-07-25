import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../task/task.component';
import { tick } from '@angular/core/testing';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-to-do-list',
  standalone: false,
  templateUrl: './to-do-list.component.html',
  styleUrl: './to-do-list.component.scss',
})
export class ToDoList {
  @Input()
  tasks!: Task[];

  @Output()
  checkedChange = new EventEmitter<Task>();

  @Output()
  onDelete = new EventEmitter<Task>();

  drop(event: CdkDragDrop<Task[]>) {
    moveItemInArray(this.tasks, event.previousIndex, event.currentIndex);
  }
  changeCheck(task: Task): void {
    this.checkedChange.emit(task);
  }
  actionDelete(task: Task): void {
    this.onDelete.emit(task);
  }
}
