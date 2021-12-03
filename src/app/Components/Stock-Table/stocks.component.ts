import { Component, OnInit } from '@angular/core';
import { StockDataService } from 'src/app/Services/Stock-Data/stock-data.service';
import { StockOpenCloseDetails } from './stock-open-close-details';

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
  dailyStockData: any = {};
  dataSource:any;

  constructor(private api: StockDataService) {}

  ngOnInit() {
    stockTickers.forEach(symbol => {
      this.api.getStockOpenCloseData(symbol)
      .subscribe((response: StockOpenCloseDetails)  => {
        this.dailyStockData = response;
        stockTickers.pop();
        this.buildStockDataArray(this.dailyStockData);
      })
    });
  }

  buildStockDataArray(stockObj: StockOpenCloseDetails) {
    DAILY_STOCK_DATA.push(stockObj);

    if(stockTickers.length == 0 || stockTickers == undefined) {
      this.dataSource = DAILY_STOCK_DATA;
    }
  }
}
