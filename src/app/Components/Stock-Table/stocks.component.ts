import { Component } from '@angular/core';

export interface StockData {
  name: string;
  value: number;
}

const STOCK_DATA: StockData[] = [
  {name: 'Stock 1', value: 100},
  {name: 'Stock 2', value: 200},
  {name: 'Stock 3', value: 300}
];

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.css']
})
export class StocksComponent {
  displayedColumns: string[] = ['name', 'value'];
  dataSource = STOCK_DATA;
}
