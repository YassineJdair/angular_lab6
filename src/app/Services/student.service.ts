import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http:HttpClient) { }

  GetStudentData(): Observable<any>{
    return this.http.get('https://jsonblob.com/api/jsonblob/6108c93a-80ba-11eb-82da-99cf1a10476d');
  }

  GetWeatherData():Observable<any>{
    return this.http.get('http://api.openweathermap.org/data/2.5/weather?q=Galway&APPID=9f9f6e0bbd3b00cbfcb18d510b87b21b');
  }
}
