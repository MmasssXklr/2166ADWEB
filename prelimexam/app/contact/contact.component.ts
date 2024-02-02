import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  firstName: string = '';
  text ='';
  email='';
  msg='';

  constructor() { }
  ngOnInit(): void{

  }
}

