import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class WeatherService {
  RapidAPIUrl: string = `https://open-weather-map27.p.rapidapi.com/weather`;
  XRapidAPIKeyName: string = `X-RapidAPI-Key`;
  XRapidAPIKeyValue: string = `d928ac32f9mshd8f50ec532bc0cap1fe475jsnac764ec88df0`;
  XRapidAPIHostLabelName: string = `X-RapidAPI-Host`;
  XRapidAPIHostLabelValue: string = `d928ac32f9mshd8f50ec532bc0cap1fe475jsnac764ec88df0`;

  constructor(private http: HttpClient) {}

  getWeatherData(cityName: string) {
    this.http.get(this.RapidAPIUrl);
  }
}
