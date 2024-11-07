import { Component} from '@angular/core';


@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
parentmessage='Hello from Parent'
newTask:any;

constructor() {}
}

//   openDialog() {
//     this.dialog.open(ChildComponent);
//   }
// }
// getData(data:any){
// console.log(data);
// }
// // getting(data:any){
//   console.log(data);
//   this.newTask=data
  


