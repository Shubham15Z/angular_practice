import { Injectable } from '@angular/core';
import { HttpClient }  from '@angular/common/http'
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PromiseServiceService {

  private apiUrl = ("https://jsonplaceholder.typicode.com/posts");

  constructor(private http: HttpClient) { }

  getDataWithPromise(): Promise<any> {
    return firstValueFrom(this.http.get(this.apiUrl));
  }
}
