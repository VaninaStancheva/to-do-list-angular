import { Component } from '@angular/core';
import {NewTaskComponent} from './new-task/new-task.component';
import { Task } from './task/task.model';
import {TaskComponent} from './task/task.component';

@Component({
  selector: 'app-tasks',
  imports: [
    NewTaskComponent,
    TaskComponent
  ],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
tasks: Task [] = [];

onAddTask (taskData: {title: string, text: string}) {
  const task: Task = {
    id: Math.random().toString(),
    title: taskData.title,
    text: taskData.text,
    status: 'pending',
  }
  this.tasks.push(task);
  console.log('add task');
}
}
