import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MovieComponent } from './movie/movie.component';

const routes: Routes = [

  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'movie',
    component:MovieComponent
  },
  {
    path: 'facts',
    loadChildren: ()=> import('./dog-facts/dog-facts.module').then(m => m.DogFactsModule)
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
