import { Component, inject, OnInit, signal } from '@angular/core';
import { Task } from './features/to-do/components/task/task.component';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { AddTaskDialog } from './features/to-do/components/add-task-dialog/add-task-dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss',
})
export class App implements OnInit {
  private dialog = inject(MatDialog);

  tasksAll: Task[] = [
    {
      title: 'Subir Commit',
      description: 'Entregar as ultimas aterações no repositório remoto.',
      completed: false,
    },
    {
      title: 'Estudar para a prova',
      description: 'Estudar as diciplinas que irão cair na prova',
      completed: false,
    },
    {
      title: 'Subir Commit',
      description: 'Entregar as ultimas aterações no repositório remoto.',
      completed: false,
    },
    {
      title: 'Testes unitários',
      description: 'Implementar a cobertura de testes dos novos componentes.',
      completed: false,
    },
    {
      title: 'Subir Commit',
      description: 'Entregar as ultimas aterações no repositório remoto.',
      completed: false,
    },
  ];

  tasks: Task[] = [];
  taskCompleted: Task[] = [];

  ngOnInit(): void {
    this.filterTasks();
  }

  filterTasks(): void {
    this.tasks = this.tasksAll.filter((task) => !task.completed);
    this.taskCompleted = this.tasksAll.filter((task) => task.completed);
  }

  openModalAdd(): void {
    const ref = this.dialog.open(AddTaskDialog, {
      data: { title: 'Nova tarefa' },
    });
    ref.beforeClosed().subscribe((task: Task) => {
      if (task) {
        this.tasksAll.push(task);
        this.filterTasks();
      }
    });
  }

  delete(task: Task): void {
    this.tasksAll = this.tasksAll.filter((item) => item !== task);
    this.filterTasks();
  }
}
