import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-length-converter',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './length-converter.component.html',
  styleUrl: './length-converter.component.scss'
})
export class LengthConverterComponent {
  inputValue: number = 0;
  result: number = 0;
  conversionDirection: string = "metersToFeet";

  convert() {
    if (this.conversionDirection === "metersToFeet") {
      this.result = this.inputValue * 3.28084;
    } else if (this.conversionDirection === "feetToMeters") {
      this.result = this.inputValue / 3.28084;
    }

    //Avrunda till en decimal
    this.result = parseFloat(this.result.toFixed(1)); 
  }
}
