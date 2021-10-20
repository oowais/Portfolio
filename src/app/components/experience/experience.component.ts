import {Component, OnInit} from '@angular/core';
import {DataService} from '../../data.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
  }

  openLink(url: string) {
    this.dataService.openLink(url);
  }

  experiences: any[] = [
    {
      title: 'Student Research Scientist',
      duration: 'Sep 2018 - Sep 2021',
      company: 'Fraunhofer FKIE',
      companyUrl: 'https://www.fkie.fraunhofer.de/',
      tasks: ['Created and delivered UI services for demo purposes.',
        'Developed and maintained XML validation software in Java EE.',
        'Developed REST services using Django framework in Python.',
        'Successfully finished master thesis \'Unsupervised Link Discovery Between Unstructured Text and Taxonomy\' ' +
        'during the student research scientist job.',
        'Developed and maintained map related UI in Angular 8 allowing to modify elements on the map using ' +
        'mouse and voice recognition.',
        'Prepared a variety of different written communications, reports and documents to ensure smooth operations.',
        'Proved successful working within tight deadlines and fast-paced atmosphere.'
      ],
      skills: [
        'Angular',
        'Python',
        'Django',
        'Typescript',
        'XML',
        'Java EE',
        'Docker'
      ]
    },
    {
      title: 'Systems Engineer',
      duration: 'Aug 2014 - Oct 2017',
      company: 'Tata Consultancy Services',
      companyUrl: 'https://www.tcs.com/',
      tasks: ['Ericsson Network Manager(ENM): ENM is a collection of virtual management tools based on a single ' +
      'software platform designed to provide unified network management capability across Radio access, Transport,' +
      ' and Core networks.',
        'Developed the UI of “Link Management” module for creating and managing links between network elements as ' +
        'part of ENM.',
        'Developed software functionalities using Node.js, the JavaScript runtime environment, Java EE and REST.',
        'Produced Integration tests for the modules created using Arquillian and later on tested the same on Docker ' +
        'images.',
        'Helped pass on the knowledge to the new hires by training them in aforementioned modules and regarding ' +
        'coding practices/guidelines.',
        'Worked on minimizing the resources held by Jboss EAP servers in a cluster environment to increase the' +
        ' efficiency.',
        'Managed development milestones from initial steps through final delivery.',
        'Coordinated with other engineers to evaluate and improve software interfaces.',
        'Reviewed code, debugged problems and corrected issues.',
        'Consulted with engineering team members to determine system loads and develop improvement plans.'
      ],
      skills: [
        'Java',
        'Java EE',
        'Javascript',
        'Node.js',
        'REST',
        'Versant database',
        'Docker',
        'Agile'
      ]
    },
    {
      title: 'Computer Engineer (Trainee)',
      duration: 'May 2013 - Jun 2013',
      company: 'Dion Global Solutions',
      companyUrl: 'https://www.dionglobal.com/',
      tasks: ['Aided in analyzing and migrating the code from Java SE 5 to 6.',
        'Learnt basics of Android programming and database management.',
        'Created product design modifications.',
      ],
      skills: [
        'Java',
        'Oracle databse'
      ]
    }
  ];
}
