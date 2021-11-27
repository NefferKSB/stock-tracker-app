import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.css']
})
export class StocksComponent implements OnInit {

  public stocks = [
    {name: 'stock one', value: 100},
    {name: 'stock two', value: 200},
    {name: 'stock three', value: 300}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
