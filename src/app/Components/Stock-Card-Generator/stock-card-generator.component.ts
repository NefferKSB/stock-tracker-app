import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
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

  constructor(private api: StockDataService) {}

  ngOnInit(): void {
    this.stockCards = [];
    this.tickerDetails = <StockCardDetails>{};
  }

  generateStockCard(tickerSymbol: String) {
    let openClose;
    let tickerInfo;
    let compDetails;

    if(tickerSymbol.includes('Ex:')) {
      let parsedSymbol = tickerSymbol.split('Ex: ');
      openClose = this.api.getStockOpenCloseData(parsedSymbol[1]);
      tickerInfo = this.api.getTickerInfo(parsedSymbol[1]);
      compDetails = this.api.getStockCompanyDetails(parsedSymbol[1]);

      forkJoin([openClose, tickerInfo, compDetails]).subscribe(result => {
        this.tickerDetails.daily_open_close_details = result[0];
        this.tickerDetails.ticker_result = result[1].results[0];
        this.tickerDetails.ticker_details = result[2];
        this.stockCards.push(this.tickerDetails);
        console.log("in call " + this.stockCards[0].ticker_result);
      });
    }
    else {
      openClose = this.api.getStockOpenCloseData(tickerSymbol);
      tickerInfo = this.api.getTickerInfo(tickerSymbol);
      compDetails = this.api.getStockCompanyDetails(tickerSymbol);

      forkJoin([openClose, tickerInfo, compDetails]).subscribe(result => {
        this.tickerDetails.daily_open_close_details = result[0];
        this.tickerDetails.ticker_result = result[1].results[0];
        this.tickerDetails.ticker_details = result[2];
        this.stockCards.push(this.tickerDetails);
        console.log("in call 2 " + this.stockCards[0].ticker_result);
      });
    }
  }
}
