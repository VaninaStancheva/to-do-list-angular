import { Component } from '@angular/core';
import {NewTaskComponent} from './new-task/new-task.component';

@Component({
  selector: 'app-tasks',
  imports: [
    NewTaskComponent
  ],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {

}
