import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Dog} from './Dog';

@Injectable({
  providedIn: 'root'
})

export class DogService {
  baseURL: string = 'https://dog.ceo/api/breeds/image/random'

  constructor(
    private http: HttpClient
  ) { }

  getDog(): Observable<Dog> {
    return this.http.get<Dog>(this.baseURL)
  }
}
