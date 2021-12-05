import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'stock-info-card',
  templateUrl: './stock-info-card.component.html',
  styleUrls: ['./stock-info-card.component.css']
})
export class StockInfoCardComponent implements OnInit {

  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;

  constructor() { }

  ngOnInit(): void {
  }

}
