import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DhmzCipConstantsService {

  public measuresURL = 'assets/cip_dhmz_chart_response_air_temp.json';

  constructor() { }
}
