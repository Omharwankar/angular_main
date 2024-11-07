import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FactListComponent } from './fact-list/fact-list.component';

const routes: Routes = [
  {
    path:'list',
    component:FactListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DogFactsRoutingModule { 

}
