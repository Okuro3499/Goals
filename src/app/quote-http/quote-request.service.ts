import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Quote } from '../quote-class/quote';

@Injectable({
  providedIn: 'root'
})
export class QuoteRequestService {

  quote: Quote;

  constructor(private http: HttpClient) {
    // tslint:disable-next-line: quotemark
    this.quote = new Quote("", "");
  }
  quoteRequest() {
    interface ApiResponse {
      quote: string;
      author: string;
    }
    // tslint:disable-next-line: prefer-const && semicolon && whitespace
    let promise = new Promise((resolve, reject)=> {
      this.http.get<ApiResponse>(environment.apiUrl).toPromise().then(response => {
        // tslint:disable-next-line: semicolon
        this.quote.quote = response.quote
        // tslint:disable-next-line: semicolon
        this.quote.author = response.author

        // tslint:disable-next-line: semicolon
        resolve()
      },
        error => {
          // tslint:disable-next-line: semicolon && quotemark
          this.quote.quote = "Never, never, never give up"
          // tslint:disable-next-line: semicolon && quotemark
          this.quote.author = "Winston Churchill"

          // tslint:disable-next-line: semicolon
          reject(error)
        // tslint:disable-next-line: semicolon
        })
    // tslint:disable-next-line: semicolon
    })
    // tslint:disable-next-line: semicolon
    return promise
  }
}

