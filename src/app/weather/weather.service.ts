import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from "../../environments/environment";
import { SearchPhotoResponse } from './interfaces/pexel.interface';
import { SearchWeatherResponse } from "./interfaces/openweather.interface";
// import { createClient } from 'pexels';



@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private PEXEL_API_KEY = environment.PEXEL_API_KEY;
  private OPEN_W_API_KEY = environment.OPEN_W_API_KEY;
  
  PEXEL_URL = "https://api.pexels.com/v1";
  OPEN_W_URL = "https://api.openweathermap.org/data/2.5/weather";
  // pexelClient = createClient(this.PEXEL_API_KEY);

  constructor(
    private _http: HttpClient
  ) {
   }

  getPhoto(query:string){
    // this.pexelClient.photos.search({ query, per_page: 1 }).then((photos:any) => console.log(photos));

    console.log("search photo =>", query)

    const headers = new HttpHeaders()
      .set('Content-Type','application/json' )
      .set("Authorization", this.PEXEL_API_KEY)

    const params = new HttpParams()
      .set('q', query)
      .set('per_page', '1')

    return this._http.get<SearchPhotoResponse>(`${this.PEXEL_URL}/search`, {headers,params})
  }

  getWeatherInfo(query:string){

    console.log("search city =>", query)


    // api.openweathermap.org/data/2.5/weather?id={city id}&appid={API key}
    const params = new HttpParams()
    .set('id', query)
    .set('appid', this.OPEN_W_API_KEY)
    console.log(this.OPEN_W_URL+params)
    return this._http.get<SearchWeatherResponse>(`${this.OPEN_W_URL}`, {params})
  }
}

