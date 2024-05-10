import { Injectable } from '@angular/core';
import employeeData from "../data/data.json";

@Injectable({
  providedIn: 'root',
})
export class DataService {
  sampleData = employeeData.employees;

  constructor() {}

  getData() {
    return this.sampleData;
  }

  pushData(data: {
    name: string;
    age: number;
    department: string;
    isEditing: boolean;
  }) {
    this.sampleData.push(data);
  }

  deleteData(name: string) {
    const index = this.sampleData.findIndex((emp) => emp.name === name);
    if (index !== -1) {
      this.sampleData.splice(index, 1);
      return true;
    }
    return false;
  }
}
