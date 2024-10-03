import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class StatService {
baseUrl = "https://localhost:44373/api";
  constructor(private _httpClient: HttpClient) { 

  }
  getStats()
  {
    var url = `${this.baseUrl}/Stats`;
    let headers = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }

    return this._httpClient.get<any>(url,headers)
    .pipe(catchError(err=>this.handleError(err)))
  }
  private handleError(error: HttpErrorResponse) {
    let errorMessage:string|undefined = error.status.toString();
    return throwError(() => new Error(errorMessage));
  }
}
