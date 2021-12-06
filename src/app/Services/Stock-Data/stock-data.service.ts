import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StockOpenCloseDetails } from 'src/app/Components/Stock-Table/stock-open-close-details';
import { TickerDetails } from 'src/app/Components/Stock-Card/ticker-details';

@Injectable({
  providedIn: 'root'
})
export class StockDataService {

  private endpoint = '';

  constructor(private http: HttpClient) { }

  getStockOpenCloseData(symbol: String): Observable<any> {
    this.endpoint = 'https://api.polygon.io/v1/open-close/' + symbol +'/2020-10-14?adjusted=true&apiKey=uLLH_N__TQuHqpD9LWYZEa_rUG4u2tG8';
    return this.http.get<StockOpenCloseDetails>(this.endpoint)
  }

  getTickerInfo(symbol: String): Observable<any> {
    this.endpoint = 'https://api.polygon.io/v3/reference/tickers?ticker=' + symbol + '&active=true&sort=ticker&order=asc&limit=1&apiKey=uLLH_N__TQuHqpD9LWYZEa_rUG4u2tG8';
    return this.http.get<TickerDetails>(this.endpoint)
  }
}
