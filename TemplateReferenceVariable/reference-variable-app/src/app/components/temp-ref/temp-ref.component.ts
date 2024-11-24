import { Component } from '@angular/core';

@Component({
  selector: 'app-temp-ref',
  templateUrl: './temp-ref.component.html',
  styleUrls: ['./temp-ref.component.css']
})
export class TempRefComponent {

  inputText: any;

  getValue(val: any){
    this.inputText = val.value;
  }

  getChkVal(val: any){
    console.log(val.checked)
  }

  getRadioVal(val: any){
    console.log(val)
  }

}
