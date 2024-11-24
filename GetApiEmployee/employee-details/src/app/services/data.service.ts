import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private formDataArray: any[] = []

  constructor() { }

  addFormData(data: any) {
    this.formDataArray.push(data)
  }

  getFormData(){
    return this.formDataArray;
  }
}
