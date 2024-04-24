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

}
