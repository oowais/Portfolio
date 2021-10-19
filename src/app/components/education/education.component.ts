import { Component, OnInit } from '@angular/core';
import {DataService} from '../../data.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  courses: string [] = [
    'Data Communication and Internet Technology',
    'Data Science and Big Data',
    'Intelligent Information Systems',
    'Computer Graphics',
    'User Centered Technology Design',
    'Web science',
    'Design Thinking',
    'Designing Interactive Systems',
    'Communications in Digital Age',
    'Language, Mind and Media'
  ]

  openLink (url: string) {
    this.dataService.openLink(url);
  }
}
