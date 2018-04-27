import { Component, OnInit } from '@angular/core';
import { Log } from "../../models/log";
import { LogService } from "../../services/log.service";

@Component({
  selector: 'app-addlog',
  templateUrl: './addlog.component.html',
  styleUrls: ['./addlog.component.css']
})
export class AddlogComponent implements OnInit {
  
  id:string;
  logText:string;
  updated:Date;

  isNew: boolean = true;
  constructor(private LogService:LogService) { }

  ngOnInit() {
    this.LogService.selectedLog.subscribe(log =>{
      if(log.id !== null){
        this.isNew = false;
        this.id = log.id;
        this.logText = log.logText,
        this.updated = log.updated
      }
      console.log(log);      
    })
  }

  onSubmit(){
    if(this.isNew){
      const newLog = {
        id: this.generateId(),
        logText:this.logText,
        updated:new Date()
      }     
      this.LogService.addLog(newLog);
    }else{
      const updLog = {
        id : this.id,
        logText:this.logText,
        updated:new Date()
      }
      this.LogService.updateLog(updLog);
    }

    this.clearState();
  }
  
  clearState(){
    this.isNew = true;
    this.id = '';
    this.logText = '';
    this.updated = null;
  }

  generateId() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
}
