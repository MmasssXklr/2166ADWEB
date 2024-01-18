import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  //Using ngIf to toggle text display
  showText: boolean = false;

  toggleText() {
    this.showText = !this.showText;
  }

  staff = [ 
    { firstName: 'Ana', lastName: 'Chipi', email: 'jChipi@test.com', role: 'User' },   
    { firstName: 'Cyrus', lastName: 'Gonzales', email: 'Cyrus@test.com', role: 'Admin' }, 
    { firstName: 'Mike', lastName: 'Antonio', email: 'AntonioM@test.com', role: 'Admin' }, 
    { firstName: 'Jes', lastName: 'Greg', email: 'GregJes@test.com', role: 'User' }, 
    { firstName: 'Ray', lastName: 'Dacquil', email: 'DaRay@test.com', role: 'User' } 
    ];
}
