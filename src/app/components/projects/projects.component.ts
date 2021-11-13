import {Component, OnInit} from '@angular/core';
import {DataService} from '../../data.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
  }

  projects: any [] = [
    {
      title: 'Jaadu - An Alien in a Terrarium',
      date: 'Oct 2018 – Jan 2019',
      url: 'https://github.com/oowais/Jaadu',
      text: 'Jaadu is an alien in the FabTerrarium, an open space with different animals/plants interacting with ' +
        'their environment or external users. It crawls in the terrarium reading the emotions of the other ' +
        'entities and displaying those emotions in itself. The materialization of Jaadu is a combination of' +
        ' Arduino, RasPI, 3D Modelling, Sensors, comm modes and LEDs. ',
      teamSize: '3',
      langUsed: 'Python, C++'
    },
    {
      title: 'LabChain',
      date: 'Apr 2018 – Aug 2018',
      url: 'https://github.com/oowais/LabChain',
      text: 'Created a Blockchain core called LabChain as part of a lab held by Fraunhofer FIT Blockchain Lab. ' +
        'Components developed: Blockchain Core component (Blocks, Branches, Transactions handling); ' +
        'Automatic Peer Discovery using DNS Seeding; Database store and recovery of Blocks',
      teamSize: '5',
      langUsed: 'Python'
    },
    {
      title: 'Muses',
      date: 'Oct 2018 – Feb 2019',
      url: 'https://github.com/oowais/Muses',
      text: 'Music recommendation system using content based music similarity. An audio comparison system which' +
        ' compares features of sound/music and recommends the closest song.',
      teamSize: '1',
      langUsed: 'Python'
    },
    {
      title: 'Sock it Up',
      date: '',
      url: '',
      text: 'A robot built using \'MakeBlock Ultimate Robot Kit\' to help physically impaired or older people to' +
        ' wear socks without using any hands. Made as part of UIST Student Innovation Contest 2018 ',
      teamSize: '5',
      langUsed: ''
    },
    {
      title: 'Trajectory Tracking of a Laser Beam',
      date: '2013',
      url: '',
      text: 'Tracking of a laser beam and rendering it on the display screen using projector using OpenCV.',
      teamSize: '2',
      langUsed: 'C++'
    },
    {
      title: 'Master Thesis',
      date: 'Nov 2020 - Jun 2021',
      url: 'https://github.com/rwth-acis/Unsupervised-Link-Discovery-Between-Unstructured-Text-and-Taxonomy/tree/master/profile-discovery',
      text: 'Unsupervised Link Discovery Between Unstructured Text and Taxonomy',
      teamSize: '1',
      langUsed: 'Python'
    }, {
      title: 'Portfolio',
      date: 'Oct 2021',
      url: 'https://github.com/oowais/Portfolio',
      text: 'Source code of current website',
      teamSize: '1',
      langUsed: 'Angular, Typescript'
    },
    , {
      title: 'GitHub User Search',
      date: 'Nov 2021',
      url: 'https://github.com/oowais/coding-challenge-user-search',
      text: 'Input any GitHub username to see their details. Live demo link is located in REAMDE of the GitHub repo.',
      teamSize: '1',
      langUsed: 'Angular, Typescript'
    }
  ];

  openLink(url: string) {
    this.dataService.openLink(url);
  }
}
