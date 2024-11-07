import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
constructor() { }
private user =new BehaviorSubject("om");
castUser=this.user.asObservable();
editUser(newUser: any){
this.user.next(newUser);
}
}
