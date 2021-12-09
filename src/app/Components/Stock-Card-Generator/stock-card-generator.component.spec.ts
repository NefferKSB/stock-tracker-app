import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockCardGeneratorComponent } from './stock-card-generator.component';

describe('StockCardGeneratorComponent', () => {
  let component: StockCardGeneratorComponent;
  let fixture: ComponentFixture<StockCardGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockCardGeneratorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockCardGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
