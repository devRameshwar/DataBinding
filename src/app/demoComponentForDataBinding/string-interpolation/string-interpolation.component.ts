import { Component } from '@angular/core';

@Component({
  selector: 'app-string-interpolation',
  templateUrl: './string-interpolation.component.html',
  styleUrls: ['./string-interpolation.component.css']
})
export class StringInterpolationComponent {
  massege: string = 'Welcome to Angular ';
  price: number = 25.50;
  currentDate: Date = new Date();

}
