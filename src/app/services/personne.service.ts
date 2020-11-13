import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Personne} from "../interfaces/personne";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PersonneService {

  url: string = "https://server-rest-api.herokuapp.com/personnes/";

  constructor(private http: HttpClient) { }

  getAll(): Observable<Personne[]> {
    return this.http.get<Array<Personne>>(this.url);
  }
}
