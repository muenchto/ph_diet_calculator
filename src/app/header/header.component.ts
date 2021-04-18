import {Component, ElementRef, OnInit} from '@angular/core';
import {OverlayContainer} from "@angular/cdk/overlay";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  isDarkTheme = false;
  constructor(private overlay: OverlayContainer, private elementRef: ElementRef) {
  }
  // Dynamically adds/removes class to parent container to apply different theme at runtime
  toggleTheme(): void {
    this.isDarkTheme = !this.isDarkTheme;
    if (this.isDarkTheme) {
      this.elementRef.nativeElement.classList.add('dark-theme');
      this.overlay.getContainerElement().classList.add('dark-theme');
    } else {
      this.elementRef.nativeElement.classList.remove('dark-theme');
      this.overlay.getContainerElement().classList.remove('dark-theme');
    }
  }

}
