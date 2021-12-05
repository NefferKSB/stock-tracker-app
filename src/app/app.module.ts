import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';


import { AppComponent } from './app.component';
import { StocksComponent } from './Components/Stock-Table/stocks.component';
import { StockInfoCardComponent } from './Components/Stock-Card/stock-info-card.component';

@NgModule({
  declarations: [
    AppComponent,
    StocksComponent,
    StockInfoCardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatTableModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
