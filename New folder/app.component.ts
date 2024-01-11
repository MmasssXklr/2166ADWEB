import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lab_Demo_Data_Binding';
  clientName = 'Charmagne Maniago';
  appliedCSS = 'green';
  notAppliedCSS = false;
  myColor = 'red';

  clickCount = 0
  clickme() {
    this.clickCount++;
  }

  resetClickCount() {
    this.clickCount = 0;
  }

}
