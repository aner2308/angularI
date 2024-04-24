import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  imports: [RouterLink],
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements AfterViewInit {
  @ViewChild('menuToggle') menuToggle!: ElementRef;
  @ViewChild('menu') menu!: ElementRef;

  ngAfterViewInit(): void {
    this.menuToggle.nativeElement.addEventListener('click', this.toggleMenu.bind(this));
  }

  toggleMenu() {
    this.menuToggle.nativeElement.classList.toggle('active');
    this.menu.nativeElement.classList.toggle('active');
  }
}
