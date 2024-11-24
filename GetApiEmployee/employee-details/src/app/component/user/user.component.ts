import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  userForm: FormGroup;

  constructor(private fb: FormBuilder, private dataService: DataService, private router: Router){
    this.userForm = this.fb.group({
      name: [''],
      email: [''],
      number: ['']
    })
  }

  onSubmit(){
    this.dataService.addFormData(this.userForm.value);
    this.router.navigate(['/user-data']);
  }
}
