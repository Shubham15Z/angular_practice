import { Component } from '@angular/core';
import { EmployeeService } from '../employee-service/employee.service';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent {
  emplist: any[] = [];

  constructor(private empService: EmployeeService){}

  ngOnInit(): void {
    this.empService.getEmployees().subscribe(data => {
      console.log(data);
      this.emplist = data;
    });
  }
}
