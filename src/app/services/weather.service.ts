import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { WeatherData } from '../models/weather.model';

@Injectable()
export class WeatherService {
  RapidAPIUrl: string = `https://yahoo-weather5.p.rapidapi.com/weather`;
  XRapidAPIKeyName: string = `X-RapidAPI-Key`;
  XRapidAPIKeyValue: string = `d928ac32f9mshd8f50ec532bc0cap1fe475jsnac764ec88df0`;
  XRapidAPIHostLabelName: string = `X-RapidAPI-Host`;
  XRapidAPIHostLabelValue: string = `yahoo-weather5.p.rapidapi.com`;

  constructor(private http: HttpClient) {}

  getWeatherData(cityName: string): Observable<WeatherData> {
    return this.http.get<WeatherData>(this.RapidAPIUrl, {
      headers: new HttpHeaders()
        .set(this.XRapidAPIHostLabelName, this.XRapidAPIHostLabelValue)
        .set(this.XRapidAPIKeyName, this.XRapidAPIKeyValue),
      params: new HttpParams()
        .set('location', cityName)
        .set('format', 'json')
        .set('u', 'c'),
    });
  }
}
