import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContactFormComponent } from './contact-form/contact-form.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';

import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { MovieComponent } from './movie/movie.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from './home/home.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { OneComponent } from './dummy/one/one.component';
import { TwoComponent } from './dummy/two/two.component';
import { TransformDataPipe } from './shared/pipes/transform-data.pipe';




@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    ContactFormComponent,
    MovieComponent,
    RegisterFormComponent,
    RegistrationComponent,
    HomeComponent,
    ParentComponent,
    ChildComponent,
    OneComponent,
    TwoComponent,
    TransformDataPipe,
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatDividerModule,
    MatButtonModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
