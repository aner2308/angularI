import { Component, ViewChild, ElementRef } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  standalone: true,
  imports: [RouterLink],
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @ViewChild('menuToggle') menuToggle!: ElementRef;
  @ViewChild('menu') menu!: ElementRef;
  menuOpen: boolean = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
    if (this.menuToggle) {
      this.menuToggle.nativeElement.classList.toggle('active');
    }
  }
}
