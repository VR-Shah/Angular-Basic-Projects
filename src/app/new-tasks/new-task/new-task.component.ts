import { Component, Input } from '@angular/core';

interface ITask {
  id:any;
  title:string;
  date:string;
  description:string;
  userId:string
}

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  
  constructor() {}
  
  @Input({required: true}) tasksList!:ITask;

}
