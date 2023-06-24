import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root'
})
export class DataGetService {

  constructor( private http: HttpClient) { 

  }

  getDataFromJson(): Observable<any> {
    return this.http.get<any>('./assets/JsonData.json');
  }
}
