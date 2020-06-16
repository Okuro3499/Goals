import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  alertMe(message: string) {
    // tslint:disable-next-line: semicolon
    alert(message)
  }

  constructor() { }
}
