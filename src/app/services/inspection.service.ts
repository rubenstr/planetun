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

  postNewInspensao(reports: any){
    let baseURL = "http://localhost:3000/";
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(reports);

    return this.http.post(baseURL + 'inspection', body,{'headers':headers})
  }  
}
