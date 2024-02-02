import { Component } from '@angular/core';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.css']
})
export class PartnersComponent {
  showText: boolean = false;

  toggleText() {
    this.showText = !this.showText;
  }

  staff = [ 
    { firstName: 'Ela', lastName: 'juacq', email: 'Ela@test.com', role: 'User124' },   
    { firstName: 'Moriz', lastName: 'Gz', email: 'Moriz@test.com', role: 'Admin3' }, 
    { firstName: 'Nik', lastName: 'Bys', email: 'Nik@test.com', role: 'Admin1' }, 
    { firstName: 'Ben', lastName: 'Reay', email: 'Ben@test.com', role: 'User454' }, 
    { firstName: 'Lao', lastName: 'May', email: 'Lao@test.com', role: 'User098' } 
    ];
}
