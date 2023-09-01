import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
interface Scheme {
  name: string;
  description: string;
}
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: [
    trigger('fadeInOut', [
      state('void', style({
        opacity: 0
      })),
      transition('void <=> *', animate(500)),
    ])
  ]
})
export class AboutComponent {


  constructor() { }
  schemes: Scheme[] = [
    {
      name: 'Sukanya Samriddhi Yojana',
      description: 'Sukanya Samriddhi Yojana is a small deposit scheme of the Government of India meant exclusively for a girl child and is launched as a part of Beti Bachao Beti Padhao Campaign. The scheme is meant to meet the education and marriage expenses of a girl child.'
    },
    {
      name: 'Education Savings Plan',
      description: 'A program to help parents save for their children\'s education.'
    },
    {
      name: 'Pocket Money Challenge',
      description: 'Encouraging children to save by matching their pocket money contributions.'
    },
    // Add more scheme objects as needed
  ];

  displayedColumns: string[] = ['name', 'description'];
}