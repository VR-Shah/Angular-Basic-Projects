import { Component, Input } from '@angular/core';
import { DUMMY_TASKS } from '../dummytasks';
import { NewTaskComponent } from './new-task/new-task.component';

@Component({
  selector: 'app-new-tasks',
  standalone: true,
  imports: [NewTaskComponent],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTasksComponent {

  constructor() {}

  @Input({required: true}) nameValue!: string;
  @Input({required: true}) userId!: string;
  
  tasksArr=DUMMY_TASKS;

  get selectedUserTasks() {
    return this.tasksArr.filter((task) => task.id == this.userId);
  }

}
