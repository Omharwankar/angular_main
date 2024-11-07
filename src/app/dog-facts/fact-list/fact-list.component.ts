import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-fact-list',
  templateUrl: './fact-list.component.html',
  styleUrls: ['./fact-list.component.css']
})
export class FactListComponent {
  factList:any;

  constructor(private http:HttpClient){
    
  }
  ngOnit(){
    this.getFacts();
  }
  getFacts(){
    this.http.get('https://dog-api.kinduff.com/api/facts?number=10').subscribe((data:any) => {
    console.log(data.facts)
    // this.factList = data.facts;
    }
  );

  }

  
}
