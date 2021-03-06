import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { ExcelService } from './services/excel.service';
import { AppComponent } from './app.component';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ExcelService, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
