import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DogFactsRoutingModule } from './dog-facts-routing.module';
import { FactListComponent } from './fact-list/fact-list.component';
import { HttpClient } from '@angular/common/http';


@NgModule({
  declarations: [
    FactListComponent
  ],
  imports: [
    CommonModule,
    DogFactsRoutingModule
  ]
})
export class DogFactsModule { 

}
