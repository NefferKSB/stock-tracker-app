import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { AppComponent } from './app.component';
import { StocksComponent } from './Components/Stock-Table/stocks.component';
import { StockInfoCardComponent } from './Components/Stock-Card/stock-info-card.component';
import { StockCardGeneratorComponent } from './Components/Stock-Card-Generator/stock-card-generator.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NavBarComponent } from './Components/Nav-Bar/nav-bar.component';
import { LandingPageComponent } from './Components/Landing-Page/landing-page.component';

@NgModule({
  declarations: [
    AppComponent,
    StocksComponent,
    StockInfoCardComponent,
    StockCardGeneratorComponent,
    NavBarComponent,
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatTableModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatToolbarModule,
    FormsModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    DragDropModule,
    BrowserAnimationsModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
