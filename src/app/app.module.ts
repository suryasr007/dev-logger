import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { LogsComponent } from './components/logs/logs.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AddlogComponent } from './components/addlog/addlog.component';

import { LogService } from "./services/log.service";


@NgModule({
  declarations: [
    AppComponent,
    LogsComponent,
    NavbarComponent,
    AddlogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot()
  ],
  providers: [LogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
