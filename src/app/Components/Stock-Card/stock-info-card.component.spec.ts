import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockInfoCardComponent } from './stock-info-card.component';

describe('StockInfoCardComponent', () => {
  let component: StockInfoCardComponent;
  let fixture: ComponentFixture<StockInfoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockInfoCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockInfoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
