import { HttpClient, HttpHandler } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
HttpClient

@Injectable({
  providedIn: 'root'
})
export class InspectionService {
  

  constructor(
    private http : HttpClient
  ) {}

  getAllInspensao(){
    return new Observable((subscriber) => {
      this.http.get("http://localhost:3000/inspection").subscribe(
        (res) => subscriber.next(res),
        (err) => subscriber.error(err)
      );
    })
  }

}
