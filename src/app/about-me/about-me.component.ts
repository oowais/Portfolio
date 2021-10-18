import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {
  aboutMeText = 'Enthusiastic software developer eager to contribute to team success through hard' +
    'work, versatility, attention to detail and excellent organizational skills. Clear ' +
    'understanding of Angular and Python and training in Java. Motivated to learn, grow and ' +
    'excel in software development industry.';

  constructor() {
  }

  ngOnInit(): void {
  }

}
