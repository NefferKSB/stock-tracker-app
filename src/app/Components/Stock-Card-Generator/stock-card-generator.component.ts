import { Component, OnInit } from '@angular/core';
import { DailyOpenCloseDetails } from 'src/app/Interfaces/daily-open-close-details';
import { StockCardDetails } from 'src/app/Interfaces/stock-card-details';
import { TickerDetails } from 'src/app/Interfaces/ticker-details';
import { TickerResult } from 'src/app/Interfaces/ticker-result';
import { StockDataService } from 'src/app/Services/Stock-Data/stock-data.service';

@Component({
  selector: 'stock-card-generator',
  templateUrl: './stock-card-generator.component.html',
  styleUrls: ['./stock-card-generator.component.css']
})

export class StockCardGeneratorComponent implements OnInit {
  value = 'Ex: MSFT';
  stockCards: StockCardDetails[];
  tickerDetails: StockCardDetails;
  tickerInfo: TickerResult;
  dailyTickerValue: DailyOpenCloseDetails;
  companyInfo: TickerDetails;

  constructor(private api: StockDataService) { }

  ngOnInit(): void {
    this.stockCards = [];
    this.tickerDetails = <StockCardDetails>{};
  }

  addStockCard(tickerSymbol: String) {
    if(tickerSymbol.includes('Ex:')) {
      let parsedSymbol = tickerSymbol.split('Ex: ');
      this.api.getTickerInfo(parsedSymbol[1])
      .subscribe(response => {
        this.tickerInfo = response.results[0];
        this.tickerDetails.ticker_result = this.tickerInfo;
        this.getDailyStockValue(parsedSymbol[1]);
        this.getCompanyInfo(parsedSymbol[1]);
        //this.stockCards.push(tickerDetails);
        console.log(JSON.stringify(this.tickerDetails));
      })
    }

    else {
      this.api.getTickerInfo(tickerSymbol)
      .subscribe(response => {
        this.tickerInfo = response.results[0];
        this.tickerDetails.ticker_result = this.tickerInfo;
        this.getDailyStockValue(tickerSymbol);
        this.getCompanyInfo(tickerSymbol);
        //this.stockCards.push(tickerDetails);
        //console.log(JSON.stringify(tickerDetails));
      })
    }
  }

  getDailyStockValue(tickerSymbol: String) {
    this.api.getStockOpenCloseData(tickerSymbol)
    .subscribe(response => {
      this.dailyTickerValue = response;
      this.tickerDetails.daily_open_close_details = this.dailyTickerValue;
    })
  }

  getCompanyInfo(tickerSymbol: String) {
    this.api.getStockCompanyDetails(tickerSymbol)
    .subscribe(response => {
      this.companyInfo = response;
      this.tickerDetails.ticker_details = this.companyInfo;
      this.stockCards.push(this.tickerDetails);
    })
  }
}
