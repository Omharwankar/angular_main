import { Component } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  register!: FormGroup;
  constructor(private fb:FormBuilder){
    this.initialize();
  }
  initialize(){
    this.register=this.fb.group({
      name:[''],
      email:['',[Validators.required,Validators.email]],
      phone:[''],
      address: this.fb.group({
        city:[''],
        state:[''],

      })
    })
  }
  onSubmit(){
    console.log(this.register.value);
  }
  setting(){
    this.register.setValue({
      name:"sid",
      email:"wiz@gmail.com",
      phone:'54648447885',
      
     
    })
  }
  patching(){
    this.register.patchValue({
      name:"om",
      email:"wiz@gmail.com",
    })
  }
  }

