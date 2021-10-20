import {Component, OnInit} from '@angular/core';
import {animate, query, stagger, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  animations: [
    trigger('componentsAnim', [
      transition('* => *', [
        query('.item', style({opacity: 0, transform: 'translateX(-30px)'})),
        query('.item', stagger('500ms', [
          animate('800ms 1.2s ease-out', style({opacity: 1, transform: 'translateX(0)'}))
        ]))
      ])
    ])
  ]
})
export class PortfolioComponent implements OnInit {
  constructor() {
  }

  ngOnInit(): void {
  }
}
