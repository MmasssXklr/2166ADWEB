import { Component } from '@angular/core';
import { concatWith } from 'rxjs';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  //Interpolation
  name = 'CHARMAGNE MANIAGO';
  position='IT Specialist' 
  work_experience=3
  email='mmasss.18.2000@gmail.com'
  website='wwww.cgresume.com'
  phone='09268902893'

  //Image Interpolation
  imageUrl:string="assets/profile.png";
  imageW:number = 110;
  imageH:number = 100;


}
