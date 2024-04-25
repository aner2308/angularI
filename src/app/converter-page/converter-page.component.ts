import { Component } from '@angular/core';
import { LengthConverterComponent } from '../length-converter/length-converter.component';
import { TemperatureConverterComponent } from '../temperature-converter/temperature-converter.component';

@Component({
  selector: 'app-converter-page',
  standalone: true,
  imports: [LengthConverterComponent, TemperatureConverterComponent],
  templateUrl: './converter-page.component.html',
  styleUrl: './converter-page.component.scss'
})
export class ConverterPageComponent {

  convertTemp(): void {
    const tempConverterEl: HTMLElement | null = document.getElementById("tempConverter");
    const lengthConverterEl: HTMLElement | null = document.getElementById("lengthConverter");

    if (tempConverterEl && lengthConverterEl) {
      tempConverterEl.style.display = "block";
      lengthConverterEl.style.display = "none";
    } else {
      console.log("Kunde inte hitta elementet")
    }
  }

  convertLength(): void {
    const tempConverterEl: HTMLElement | null = document.getElementById("tempConverter");
    const lengthConverterEl: HTMLElement | null = document.getElementById("lengthConverter");

    if (tempConverterEl && lengthConverterEl) {
      tempConverterEl.style.display = "none";
      lengthConverterEl.style.display = "block";
    } else {
      console.log("Kunde inte hitta elementet")
    }
  }
}
