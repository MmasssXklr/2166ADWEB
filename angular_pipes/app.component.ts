import { Component } from '@angular/core';
import { Observable,map,interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  time$: Observable<Date>;
  title = 'midterm';
  Fruits = ["1","2","3","4","5","6"];
  
  ngOnInit(){}

  //currency
  price : number = 50000; 

  //percent pipes
  num1:number = 0.59;
  num2:number = 1.259;

  //json pipes
  object1: Object = {A: 'Apple', B: 'Box', C: {Cake: 1, numbers: [2, 4, 6, 8, 10]}};

  object2: Object = {foo: 'bar', baz: 'qux', nested: {xyz: 3, numbers: [1, 2, 3, 5, 7]}};
  object3: Object = {X: 'xy', Y: 'yoyo', Z: {Zebra: 3, numbers: [10, 20, 30, 40, 50]}};
  
  //decimal
  decimalNum1: number = 12.638467846;
  decimalNum2: number = 0.10;
  decimalNum3: number = 2.30;
  
  presentDate = new Date();
  constructor(){
    this.time$ = interval(1000).pipe(map(()=>new Date()))
    
  }
}
