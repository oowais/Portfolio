import { Component, OnInit } from '@angular/core';
import {DataService} from '../../data.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  openLink (url: string) {
    this.dataService.openLink(url);
  }
}
