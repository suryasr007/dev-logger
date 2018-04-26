import { Component, OnInit, ViewChild } from '@angular/core';
import { Log } from "../../models/log";
import { LogService } from "../../services/log.service";

@Component({
  selector: 'app-addlog',
  templateUrl: './addlog.component.html',
  styleUrls: ['./addlog.component.css']
})
export class AddlogComponent implements OnInit {
  logObj: Log = {
    logText:''
  }

  @ViewChild('logForm') form:any;

  constructor(private LogService:LogService) { }

  ngOnInit() {
    
  }

  onSubmit({value, valid}:{value: Log, valid:boolean}){
    if (!valid) {
      console.log("Form invalid");      
    }else{
      value.updated = new Date();      
      this.LogService.addLog(value);
      this.form.reset();
    }
  } 
}
