import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-userdata',
  templateUrl: './userdata.component.html',
  styleUrls: ['./userdata.component.css']
})
export class UserdataComponent {
  formDataArray: any[] = [];

  constructor(private dataServcie: DataService){

  }

  ngOnInit(){
    this.formDataArray = this.dataServcie.getFormData();
  }
}
