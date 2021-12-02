import { Component, OnInit } from '@angular/core';
import { StockDataService } from 'src/app/Services/Stock-Data/stock-data.service';
import { StockOpenCloseDetails } from './stock-open-close-details';
import {  map, tap } from 'rxjs';

let stockTickers: String[] = [
  'MSFT', 'KO', 'MMM', 'LOW', 'AMZN'
];

let DAILY_STOCK_DATA: StockOpenCloseDetails[] = [];

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.css']
})
export class StocksComponent implements OnInit {
  displayedColumns: string[] = ['ticker', 'open', 'close'];
  dailyStocksArr: any[] = [];
  dailyStockData: any = {};
  dataSource:any;
  payload: any;

  constructor(private api: StockDataService) {}

  ngOnInit() {
    stockTickers.forEach(stockSymbol => {
      this.api.getStockOpenCloseData(stockSymbol)
      .pipe(
      //  map(response => console.log(response.data)),
        tap(stockPayload => {
          //console.log('Stocks Array', stockPayload)
          this.dailyStockData = new StockOpenCloseDetails;
          this.dailyStockData.ticker = stockPayload.symbol;
          this.dailyStockData.open = parseFloat(stockPayload.open);
          this.dailyStockData.close = parseFloat(stockPayload.close);

          this.dailyStocksArr.push(this.dailyStockData);
        })
      )
      .subscribe(stockPayload => {
        // this.payload = stockPayload;

        // //this.dailyStockData = new StockOpenCloseDetails;
        // this.dailyStockData.ticker = this.payload.symbol;
        // this.dailyStockData.open = parseFloat(this.payload.open);
        // this.dailyStockData.close = parseFloat(this.payload.close);

        // console.log('Stock info for ' + stockSymbol + ' is ' + JSON.stringify(this.dailyStockData));
        // this.dailyStocksArr.push(this.dailyStockData);
      });
    })
    this.dataSource = this.dailyStocksArr;
    console.log(this.dailyStocksArr);
    //console.log(this.dataSource);
  }
}
