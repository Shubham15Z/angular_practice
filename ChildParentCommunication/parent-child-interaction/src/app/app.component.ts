import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'parent-child-interaction';

  enterName: string = "Rahul";
  parentData: string = "";
  value: string = "";

  transferedData(){
    this.parentData = this.enterName;
  }

  sendData(value: string){
    this.value = value
  }
}
