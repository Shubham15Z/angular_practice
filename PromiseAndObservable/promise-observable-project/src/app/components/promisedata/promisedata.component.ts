import { Component } from '@angular/core';

@Component({
  selector: 'app-promisedata',
  templateUrl: './promisedata.component.html',
  styleUrls: ['./promisedata.component.scss']
})
export class PromisedataComponent {

  constructor(){}

  ngOnInit(){
    let response = this.getDataWithPromise();
    response.then((resolve) => {
      console.log(resolve);
    }, (reject) => {
      console.log(reject)
    })
  }

  public getDataWithPromise(){
    let promise = new Promise((resolve, reject) => {
      const val = 2 + 1;
      if(val == 4){
        resolve("Success")
      }
      else{
        reject("Error")
      }
    })
    return promise
  }
  
}
