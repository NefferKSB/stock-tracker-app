import { Component, Input, OnInit } from '@angular/core';
import { StockCardDetails } from 'src/app/Interfaces/stock-card-details';

@Component({
  selector: 'stock-info-card',
  templateUrl: './stock-info-card.component.html',
  styleUrls: ['./stock-info-card.component.css']
})
export class StockInfoCardComponent implements OnInit {
  @Input() stockCardDetails: StockCardDetails;

  constructor() {}

  ngOnInit() {}
}
