import { TickerResult } from "./ticker-result";

export interface Ticker {
  count: number;
  next_url: string;
  request_id: string;
  results: TickerResult[];
  status: string;
}
