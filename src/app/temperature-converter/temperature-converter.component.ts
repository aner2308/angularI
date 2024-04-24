import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-temperature-converter',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './temperature-converter.component.html',
  styleUrl: './temperature-converter.component.scss'
})
export class TemperatureConverterComponent {
  inputValue: number = 0;
  result: number = 0;
  conversionDirection: string = "celsiusToFahrenheit";

  convert(): void {
    if (this.conversionDirection === "celsiusToFahrenheit") {
      this.result = (this.inputValue * 9 / 5) + 32;
    } else if (this.conversionDirection === "fahrenheitToCelsius") {
      this.result = (this.inputValue - 32) * 5 / 9;
    }

    //Avrunda till en decimal
    this.result = parseFloat(this.result.toFixed(1));
  }
}
