import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  @Input() parentData!: string;

  @Output() public sendData = new EventEmitter<string>();

  ngOnInit(){
    this.sendData.emit('Child Data');
  }
}
