import { Component } from '@angular/core';
import { ObservableServiceService } from 'src/app/services/observable-service.service';
import { PromiseServiceService } from 'src/app/services/promise-service.service';

@Component({
  selector: 'app-data-display',
  templateUrl: './data-display.component.html',
  styleUrls: ['./data-display.component.scss']
})
export class DataDisplayComponent {

  promiseData: any;
  observableData: any;

  constructor(
    private promiseService: PromiseServiceService,
    private observableService: ObservableServiceService
  ) {}

  ngOnInit(): void {
    this.getPromiseData();
    this.getObservableData();
  }

  getPromiseData(): void {
    this.promiseService.getDataWithPromise().then(data => {
      this.promiseData = data;
    }).catch(error => {
      console.error("Error while fetching promise data", error);
    });
  }

  getObservableData(): void{
    this.observableService.getDataWithObservable().subscribe(data => {
      this.observableData = data;
    }, error => {
      console.log("Error while fetching Observable data", error);
    });
  }

}
