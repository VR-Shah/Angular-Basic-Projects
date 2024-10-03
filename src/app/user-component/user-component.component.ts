import { Component, computed, EventEmitter, Input, Output, signal } from '@angular/core';
import {DUMMY_USERS} from "../dummydata";

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user-component',
  standalone: true,
  imports: [],
  templateUrl: './user-component.component.html',
  styleUrl: './user-component.component.css'
})

export class UserComponentComponent {
  /**
   * Signals and for dummy one image
  // //just get the random index from the array
  // selectedUsers = DUMMY_USERS[randomIndex];
  // //using signals
  // // selectedUsers = signal(dummyJSON[randIndex]);

  // //getter method to get the Image
  // // get Image() {
  // //   return this.selectedUsers.avtar;
  // // }
  // imagePath = computed(() => this.selectedUser.avta);

  // selectedUser() {
  //   const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
  //   this.selectedUser.set(DUMMY_USERS[randomIndex]);
  // }

  // selectedUser = signal(DUMMY_USERS[randomIndex]);

  // // Computed property to get the image path
  // imagePath = computed(() => this.selectedUser().avatar);

  // // Method to randomly select a new user
  // selectRandomUser() {
  //   const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
  //   this.selectedUser.set(DUMMY_USERS[randomIndex]);
  // } 
  */

//to bind a child property into the parent component
 @Input({ required: true }) id!: string;
 @Input({ required: true }) avatar!: string;
 @Input({ required: true }) name!: string;
 @Output() selectedUser = new EventEmitter<string>();

  //getter method to get the Image
  get imagePath() {
    return this.avatar;
  }

  onSelectUsers() {
    this.selectedUser.emit(this.id);
  }

}
