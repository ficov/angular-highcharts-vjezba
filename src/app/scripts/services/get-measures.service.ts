import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Measure } from '../interfaces/measure';
import { DhmzCipConstantsService } from './dhmz-cip-constants.service';

@Injectable({
  providedIn: 'root'
})
export class GetMeasuresService {

  constructor(private http:HttpClient, private service:DhmzCipConstantsService) { }

  getMeasuers(): Observable<Measure> {
    console.log(typeof this.http.get<Measure>(this.service.measuresURL))
    return this.http.get<Measure>(this.service.measuresURL);
  }
}
