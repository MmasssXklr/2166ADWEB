import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lab_Activity_using_Bootstrap';
  clickCount = 0
  clickme(){
    this.clickCount++;
  }
  resetClickCount(){
    this.clickCount = 0;
  }
}
