import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StockDataService {

  private endpoint = '';

  constructor(private http: HttpClient) { }

  getStockOpenCloseData(symbol: String): Observable<any> {
    this.endpoint = 'https://api.polygon.io/v1/open-close/' + symbol +'/2020-10-14?adjusted=true&apiKey=uLLH_N__TQuHqpD9LWYZEa_rUG4u2tG8';
    return this.http.get(this.endpoint)
  }

  getTickerInfo(symbol: String): Observable<any> {
    this.endpoint = 'https://api.polygon.io/v3/reference/tickers?ticker=' + symbol + '&active=true&sort=ticker&order=asc&limit=1&apiKey=uLLH_N__TQuHqpD9LWYZEa_rUG4u2tG8';
    return this.http.get(this.endpoint)
  }

  getStockCompanyDetails(symbol: String): Observable<any> {
    this.endpoint = 'https://api.polygon.io/v1/meta/symbols/' + symbol + '/company?apiKey=uLLH_N__TQuHqpD9LWYZEa_rUG4u2tG8';
    return this.http.get(this.endpoint);
  }
}
