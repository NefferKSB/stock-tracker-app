import { Component } from '@angular/core';
import { StockDataService } from 'src/app/Services/Stock-Data/stock-data.service';

@Component({
  selector: 'stock-info-card',
  templateUrl: './stock-info-card.component.html',
  styleUrls: ['./stock-info-card.component.css']
})
export class StockInfoCardComponent {
  value = 'Clear me';
  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;

  constructor(private api: StockDataService) { }

  getTickerInfo() {
    this.api.getTickerInfo('MSFT')
    .subscribe(response => {
      console.log(JSON.stringify(response));
    })
  }
}
