import {Component, ElementRef, HostBinding, ViewChild} from '@angular/core';
import {FormControl} from '@angular/forms';
import {DataService} from './data.service';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Owais\' Portfolio';
  sourceCodeUrl = "https://github.com/oowais/Portfolio";
  toggleControl = new FormControl(false);
  @HostBinding('class') className = '';
  @ViewChild('main', {static: true}) myDiv: ElementRef | undefined;

  constructor(private dataService: DataService,
              private _snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.toggleControl.valueChanges.subscribe((mode) => {
      const darkClassName = 'dark-mode';
      const lightClassName = 'light-mode';
      let toBeRemovedClass;
      let toBeAddedClass;

      if (mode) {
        toBeRemovedClass = darkClassName;
        toBeAddedClass = lightClassName;
      } else {
        toBeRemovedClass = lightClassName;
        toBeAddedClass = darkClassName;
      }
      (this.myDiv as ElementRef).nativeElement.classList.remove(toBeRemovedClass);
      (this.myDiv as ElementRef).nativeElement.classList.add(toBeAddedClass);

      this._snackBar.open('Switched to ' + toBeAddedClass, 'close', {duration: 2000});
    });
  }

  goToSourceCode(): void {
    this.dataService.openLink(this.sourceCodeUrl);
  }

  openResume() {
    this.dataService.openFile('../assets/Resume.pdf');
  }
}
