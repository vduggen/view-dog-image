import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Dog} from './Dog';

@Injectable({
  providedIn: 'root'
})

export class DogService {
  baseURL: string = 'https://dog.ceo/api';

  constructor(
    private http: HttpClient
  ) { }

  getDog(): Observable<Dog> {
    return this.http.get<Dog>(`${this.baseURL}/breeds/image/random`);
  }

  getRacesDog(): Observable<object> {
    return this.http.get<Dog>(`${this.baseURL}/breeds/list/all`);
  }

  getRaceSpecificDog(raceName: string): Observable<Dog> {
    return this.http.get<Dog>(`${this.baseURL}/breed/${raceName}/images/random`);
  }

  getRaceSpecificSubrace(raceName: string, subraceName: string): Observable<Dog> {
    return this.http.get<Dog>(`${this.baseURL}/breed/${raceName}/${subraceName}/images/random`);
  }
}
