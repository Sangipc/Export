import { Component } from '@angular/core';
import {ExcelService} from './services/excel.service';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular 6';
  data: any = [{
   empId: 1170906,
   empName: 'Sruthi Varghese',
   doj: '04-Sep-2018',
   leave: 'cl',
   carry_over_from_2018: 0,
   Jan: 0,
   Feb: 0,
   Mar: 0,
   April: 0,
   May: 0,
   June: 0,
   July: 0,
   leave_accrued_as_on_July_2019: 0,
   leave_taken:0,
   Balance_leave:2
},
  {
   empId: null,
   empName: null,
   doj: null,
   leave: 'el',
   carry_over_from_2018: 12,
   Jan: 0,
   Feb: 1,
   Mar: 2,
   April: 4,
   May: 0,
   June: 0,
   July: 0,
   leave_accrued_as_on_July_2019: 4,
   leave_taken:3,
   Balance_leave:13

  },
  {
   empId: null,
   empName: null,
   doj: null,
   leave: 'lopl',
   carry_over_from_2018: 0,
   Jan: 0,
   Feb: 0,
   Mar: 2,
   April: 4,
   May: 0,
   June: 0,
   July: 0,
   leave_accrued_as_on_July_2019: 0,
   leave_taken:2,
   Balance_leave:2
 },
 {
   empId: 1170909,
   empName: 'Kuncheria Kuruvilla',
   doj: '04-Sep-2018',
   leave: 'cl',
   carry_over_from_2018: 0,
   Jan: 0,
   Feb: 0,
   Mar: 0,
   April: 0,
   May: 0,
   June: 0,
   July: 0,
   leave_accrued_as_on_July_2019: 0,
   leave_taken:0,
   Balance_leave:2
},
  {
   empId: null,
   empName: null,
   doj: null,
   leave: 'el',
   carry_over_from_2018: 12,
   Jan: 0,
   Feb: 1,
   Mar: 2,
   April: 4,
   May: 0,
   June: 0,
   July: 0,
   leave_accrued_as_on_July_2019: 4,
   leave_taken:3,
   Balance_leave:13

  },
  {
   empId: null,
   empName: null,
   doj: null,
   leave: 'lopl',
   carry_over_from_2018: 0,
   Jan: 0,
   Feb: 0,
   Mar: 2,
   April: 4,
   May: 0,
   June: 0,
   July: 0,
   leave_accrued_as_on_July_2019: 0,
   leave_taken:2,
   Balance_leave:2
 }
];
  constructor(private excelService: ExcelService){

  }
  exportAsXLSX(): void {
    this.excelService.exportAsExcelFile(this.data, 'sample');
  }
}
