import {Component, ElementRef, HostBinding, ViewChild} from '@angular/core';
import {FormControl} from '@angular/forms';

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
  @ViewChild('main', { static: true }) myDiv: ElementRef | undefined;

  constructor() {
  }

  ngOnInit(): void {
    this.toggleControl.valueChanges.subscribe((mode) => {
      const darkClassName = 'dark-mode';
      const lightClassName = 'light-mode';

      if (mode) {
        (this.myDiv as ElementRef).nativeElement.classList.remove(darkClassName);
        (this.myDiv as ElementRef).nativeElement.classList.add(lightClassName);
      }
      else {
        (this.myDiv as ElementRef).nativeElement.classList.remove(lightClassName);
        (this.myDiv as ElementRef).nativeElement.classList.add(darkClassName);
      }

    });
  }

  goToSourceCode(): void {
    window.open(this.sourceCodeUrl, "_blank");
  }
}
