import { Component, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  userForm: FormGroup;
  dataService: DataService = inject(DataService);

  constructor(private router: Router) {
    this.userForm = new FormGroup({
      name: new FormControl(''),
      age: new FormControl(''),
      department: new FormControl(''),
    });
  }

  onSubmit() {
    if (this.userForm.valid) {
      console.log('Form submitted:', this.userForm.value);
      this.dataService.pushData(this.userForm.value);
       this.router.navigate(['/']);
    }
  }
}
