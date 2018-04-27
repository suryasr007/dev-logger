import { Component, OnInit } from '@angular/core';
import { Log } from "../../models/log";
import { LogService } from "../../services/log.service";

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.css']
})
export class LogsComponent implements OnInit {
  logs: Log[];

  selectedLog: Log;
  loaded: boolean = false;

  constructor(private LogService:LogService) { }

  ngOnInit() {
    this.LogService.stateClear.subscribe(clear => {
      if(clear){
        this.selectedLog = {
          id:'',
          logText:'',
          updated:null
        };
      }
    })
      this.LogService.getLogs().subscribe((logs)=>{
        this.logs = logs;
        this.loaded = true;
      });  
  }

  onRemove(index: number){
    this.LogService.removeLog(index).subscribe((logs)=>{
      console.log(logs);      
      this.logs = logs;
    });
  }

  onSelect(log: Log){
    this.LogService.setFormLog(log);
    this.selectedLog = log;
  }

}
