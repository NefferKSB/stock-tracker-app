import { Component, OnInit } from '@angular/core';
import { StockDataService } from 'src/app/Services/Stock-Data/stock-data.service';
import { StockOpenCloseDetails } from './stock-open-close-details';
import { map, tap } from 'rxjs';

let stockTickers: String[] = [
  'MSFT', 'KO', 'MMM', 'LOW', 'AMZN'
];

let STOCK_DATA: StockOpenCloseDetails[] = [];

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.css']
})
export class StocksComponent implements OnInit {
  stock: any;

  constructor(private api: StockDataService, private openCloseDataObj: StockOpenCloseDetails) {}

  ngOnInit() {
    stockTickers.forEach(stockSymbol => {
      this.api.getStockOpenCloseData(stockSymbol)
      .pipe(
        map(response => console.log("response is", response.data)),
        tap(user => console.log("users array", user))
      )
      .subscribe(stockPayload => {
        this.stock = stockPayload;
        console.log('Stock info for ' + stockSymbol + ' is ' + JSON.stringify(this.stock.symbol));
        // this.openCloseDataObj.ticker = this.stock.symbol;
        // this.openCloseDataObj.open = parseFloat(this.stock.open);
        // this.openCloseDataObj.close = parseFloat(this.stock.close);

        this.openCloseDataObj.ticker = 'test';
        this.openCloseDataObj.open = 10;
        this.openCloseDataObj.close = 20;

        //console.log(JSON.stringify(this.openCloseDataObj));

        STOCK_DATA.push(this.openCloseDataObj);
      });
    })
  }

  displayedColumns: string[] = ['ticker', 'open', 'close'];
  dataSource = STOCK_DATA;
}
