import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

  constructor() { }

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
}
