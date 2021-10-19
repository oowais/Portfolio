import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-interests',
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.scss']
})
export class InterestsComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  interests: string[] = [
    'Angular', 'Python', 'Typescript', 'Angular material', 'JavaScript', 'Node.js', 'Java', 'REST', 'SQL', 'MongoDB',
    'NLP', 'Flask', 'Django', 'Docker', 'Maven', 'Git', 'Agile', 'CI/CD', 'Github actions'];

}
