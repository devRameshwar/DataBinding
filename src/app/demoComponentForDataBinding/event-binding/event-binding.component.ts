import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent {

  massege: string = 'Welcome to Angular ';
  price: number = 25.50;
  currentDate: Date = new Date();

}
