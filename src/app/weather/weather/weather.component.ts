import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { SearchWeatherResponse } from '../interfaces/openweather.interface';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
})
export class WeatherComponent implements OnInit {

  city$: Observable<SearchWeatherResponse> | undefined;

  constructor(
    private wService: WeatherService,
    private _router:Router,
    private _route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.city$ = this._route.params
      .pipe(switchMap( ({id}) => this.wService.getWeatherInfo(id) ))
  }

}
