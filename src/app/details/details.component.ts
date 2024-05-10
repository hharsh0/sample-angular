import { Component, inject } from '@angular/core';
import employeeData from 'src/data/data.json'
import { DataService } from '../data.service';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent {
  myData: any = [];
  dataService: DataService = inject(DataService);

  constructor() {
    this.myData = this.dataService.getData();
  }
  sample = employeeData;

  deleteEmployee(name: string){
    this.dataService.deleteData(name);
  }

  logData(){
    console.log(this.myData);
  }
}
