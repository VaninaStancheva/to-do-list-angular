import {Component, EventEmitter, Output} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-new-task',
  imports: [
    FormsModule
  ],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  enteredTitle = '';
  enteredText = '';
@Output() add = new EventEmitter<{title:string, text:string}>();

onSubmit () {
  this.add.emit({title: this.enteredTitle, text: this.enteredText});
  this.enteredTitle = '';
  this.enteredText = '';
}
}
