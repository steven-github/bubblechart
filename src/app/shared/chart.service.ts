import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Clusters } from './clusters';

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  constructor(private _http: HttpClient) { }

  getData(): Observable<any> {
    return this._http.get<Clusters>("assets/case_study_data_base.json")
    .pipe(
      map((response) => { 
        // console.log('c', response.Clusters);
        return response.Clusters
      })
    );
  }
}
