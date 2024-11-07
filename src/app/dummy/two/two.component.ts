import { Component } from '@angular/core';
import { UserService } from '../user.service';
@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent {

user: any;
newUser: any;
constructor(private userService:UserService){}
ngOnInit(){ 
this.userService.castUser.subscribe(user => this.user = user);
}



}
