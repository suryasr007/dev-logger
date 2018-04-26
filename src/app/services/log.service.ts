import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { of } from "rxjs/observable/of";
import { Log } from "../models/log";

@Injectable()
export class LogService {
  logs: Log[];
  max_id: number = 0;

  constructor() {
    this.logs = [
      {
        logText: "Python dict is useful in many ways",
        updated: new Date()
      },
      {
        logText: "Secong log for python",
        updated: new Date()
      },
      {
        logText: "Third log of javascript",
        updated: new Date()
      }
    ];
   }

  getLogs(): Observable<Log[]>{
    return of(this.logs);
  }

  addLog(log: Log){
    this.logs.unshift(log)
  }

  removeLog(index: number): Observable<Log[]>{
    this.logs = this.logs.slice(0, index).concat(this.logs.slice(index+1, this.logs.length));
    return of(this.logs);
  }

}
