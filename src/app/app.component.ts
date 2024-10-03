import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { UserComponentComponent } from "./user-component/user-component.component";
import { DUMMY_USERS } from './dummydata';
import { NewTasksComponent } from "./new-tasks/new-task.component";
import { DUMMY_TASKS } from './dummytasks';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponentComponent, UserComponentComponent,
    NewTasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  userArr = DUMMY_USERS;
  selectedUserId:any;
  selectedUserTasks= DUMMY_TASKS;

  get selectedUser() {
    return this.userArr.find((user) => user.id === this.selectedUserId)!;
  }

  onSelectUser(id: string) {
    this.selectedUserId = id;
  }

}
