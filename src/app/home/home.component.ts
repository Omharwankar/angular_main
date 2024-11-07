import { Component } from '@angular/core';
import { TransformDataPipe } from "../shared/pipes/transform-data.pipe";

@Component({
  selector: 'app-home',

  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  // imports: [TransformDataPipe]
})
export class HomeComponent {
  inp:any
  ngAfterContentChecked(){
    this.dummy4()
  }
ngAfterContentInit(){
this.dummy3()
}
ngDoCheck(){
  this.dummy2()
}
ngOnInit(){
this.dummy()
}
dummy(){
  console.log('this is ngOnInit');  
}
dummy2(){
  console.log('this is ngDocheck');
}
dummy3(){
  console.log('this is ngAfterContentInit');
}
dummy4(){
  console.log('this is ngAfterContentChecked');
  
}
}
