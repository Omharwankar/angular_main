import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent {
  list!: FormArray;
  
  hospitalRegistration!:FormGroup;
  
  constructor(private fb:FormBuilder){
    this.hospitalForm();
  }
  hospitalForm(){
    this.hospitalRegistration=this.fb.group({
      name:[''],
      email:[''],
      patientList: this.fb.array([])
    })
  }
  createItem(): FormGroup {
    return this.fb.group({
      name:'',
      patientId:'',
    })
  }
  addTask() {
      this.list = this.hospitalRegistration.get('patientList') as FormArray
      this.list.push(this.createItem())
      console.log(this.list); 
    }
    removeQuantity(i:number) {  
      this.list.removeAt(i);  
    }  
  }

