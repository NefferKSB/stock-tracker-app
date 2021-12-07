import { Component, OnInit } from '@angular/core';
import { StockDataService } from 'src/app/Services/Stock-Data/stock-data.service';

@Component({
  selector: 'stock-info-card',
  templateUrl: './stock-info-card.component.html',
  styleUrls: ['./stock-info-card.component.css']
})
export class StockInfoCardComponent implements OnInit {
  value = 'Ex: MSFT';
  tickerInfo: any = {};
  dailyTickerValue: any = {};
  companyInfo: any = {};

  constructor(private api: StockDataService) { }

  ngOnInit() {}

  getTickerInfo(tickerSymbol: String) {
    if(tickerSymbol.includes('Ex:')) {
      let parsedSymbol = tickerSymbol.split('Ex: ');
      this.api.getTickerInfo(parsedSymbol[1])
      .subscribe(response => {
        this.tickerInfo = response.results[0];
        this.getDailyStockValue(parsedSymbol[1]);
        this.getCompanyInfo(parsedSymbol[1]);
        console.log(JSON.stringify(this.tickerInfo));
      })
    }

    else {
      this.api.getTickerInfo(tickerSymbol)
      .subscribe(response => {
        this.tickerInfo = response.results[0];
        this.getDailyStockValue(tickerSymbol);
        this.getCompanyInfo(tickerSymbol);
        console.log(JSON.stringify(this.tickerInfo));
      })
    }
  }

  getDailyStockValue(tickerSymbol: String) {
    this.api.getStockOpenCloseData(tickerSymbol)
    .subscribe(response => {
      this.dailyTickerValue = response;
    })
  }

  getCompanyInfo(tickerSymbol: String) {
    this.api.getStockCompanyDetails(tickerSymbol)
    .subscribe(response => {
      this.companyInfo = response;
    })
  }
}
