import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

import { AppComponent } from './app.component';
import { StocksComponent } from './Components/Stock-Table/stocks.component';
import { StockInfoCardComponent } from './Components/Stock-Card/stock-info-card.component';
import { StockCardGeneratorComponent } from './Components/Stock-Card-Generator/stock-card-generator.component';

@NgModule({
  declarations: [
    AppComponent,
    StocksComponent,
    StockInfoCardComponent,
    StockCardGeneratorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatTableModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    MatIconModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
