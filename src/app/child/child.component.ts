import { Component, EventEmitter, Input, Output, SimpleChange} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
@Input() message='';
@Output()childmessage=new EventEmitter
@Output()msg=new EventEmitter
newTask: any;


addTask() {
  
    this.msg.emit(this.newTask)
    console.log(this.newTask);
    
  }
ngOnChanges(changes: SimpleChange):void{
console.log("world");
console.log(changes);


  }
}


