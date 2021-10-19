import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  sourceCodeUrl = "https://github.com/oowais/Portfolio";
  toggleControl = new FormControl(false);

  constructor() {
  }

  ngOnInit(): void {
  }

  goToSourceCode(): void {
    window.open(this.sourceCodeUrl, "_blank");
  }
}
