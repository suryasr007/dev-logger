import { Injectable } from '@angular/core';

import { Observable } from "rxjs/Observable";
import { of } from "rxjs/observable/of";
import { BehaviorSubject } from "rxjs/BehaviorSubject";

import { Log } from "../models/log";

@Injectable()
export class LogService {
  logs: Log[];

  private logSource = new BehaviorSubject<Log>({id: null, logText:null, updated:null})
  selectedLog = this.logSource.asObservable();
  private stateSource = new BehaviorSubject<boolean>(true);
  stateClear = this.stateSource.asObservable()

  constructor() {
    // this.logs = [
    //   { 
    //     id:'0',
    //     logText: "Python dict is useful in many ways",
    //     updated: new Date()
    //   },
    //   {
    //     id:'1',
    //     logText: "Secong log for python",
    //     updated: new Date()
    //   },
    //   {
    //     id:'3',
    //     logText: "Third log of javascript",
    //     updated: new Date()
    //   }
    // ];
    this.logs = [];
   }

  getLogs(): Observable<Log[]>{
    if(localStorage.getItem('logs') === null){
      this.logs = [];
    } else {
      this.logs = JSON.parse(localStorage.getItem('logs'));
    }
    return of(this.logs);
  }

  setFormLog(log: Log){
    this.logSource.next(log);
  }


  addLog(log: Log){
    this.logs.unshift(log);
    localStorage.setItem('logs', JSON.stringify(this.logs));
  }

  removeLog(index: number): Observable<Log[]>{
    this.logs = this.logs.slice(0, index).concat(this.logs.slice(index+1, this.logs.length));
    return of(this.logs);
  }

  updateLog(log: Log){
    this.logs.forEach((cur, index)=>{
      if(log.id === cur.id){
        this.logs.splice(index, 1);
      }
    });
    this.logs.unshift(log);
    localStorage.setItem('logs', JSON.stringify(this.logs));    
  }

  clearState(){
    this.stateSource.next(true);
  }

}
