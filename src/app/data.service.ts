import { Injectable } from '@angular/core';
import { employees } from 'src/data/data';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  sampleData = employees;

  constructor() { }

  getData(){
    return this.sampleData;
  }

  pushData(data:{name:string,age:number,department:string}){
    this.sampleData.push(data);
  }
}
