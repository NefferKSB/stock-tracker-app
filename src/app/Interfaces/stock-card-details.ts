import { DailyOpenCloseDetails } from "./daily-open-close-details";
import { TickerDetails } from "./ticker-details";
import { TickerResult } from "./ticker-result";


export interface StockCardDetails {
  ticker_details: TickerDetails;
  daily_open_close_details: DailyOpenCloseDetails;
  ticker_result: TickerResult;
}
