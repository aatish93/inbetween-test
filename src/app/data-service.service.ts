import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  public data_address='./assets/data.json';

  constructor(private http: HttpClient) { }
  getColors(): Observable<any[]>{
    return this.http.get<any[]>(this.data_address).pipe(map(res=>{
        let result:any[] = JSON.parse(JSON.stringify(res)).colors ;
        return result;
      }));
  }
  getImages(): Observable<any[]>{
    return this.http.get<any[]>(this.data_address).pipe(map(res=>{
        let result:any[] = JSON.parse(JSON.stringify(res)).images ;
        return result;
      }));
  }
}
