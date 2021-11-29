import { Component, OnInit } from '@angular/core';
import { StockDataService } from 'src/app/Services/Stock-Data/stock-data.service';
import { StockDetails } from './stock-details';

const STOCK_DATA: StockDetails[] = [
  {name: 'Stock 1', value: 100},
  {name: 'Stock 2', value: 200},
  {name: 'Stock 3', value: 300}
];

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.css']
})
export class StocksComponent implements OnInit {
  displayedColumns: string[] = ['name', 'value'];
  dataSource = STOCK_DATA;
  stock: any;

  constructor(private api: StockDataService) {}

  ngOnInit() {
    this.api.getStockData();
  }

  getStockData() {
    this.api.getStockData()
    .subscribe(stockPayload => this.stock = stockPayload);
    console.log(this.stock);
  }
}
