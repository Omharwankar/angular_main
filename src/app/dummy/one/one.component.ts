import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent {
  
  newUser: any;
  constructor(private userService:UserService){}

  pushinp(){
    this.userService.editUser(this.newUser);
  }

}
