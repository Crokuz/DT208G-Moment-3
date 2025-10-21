import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-convert',
  imports: [FormsModule],
  templateUrl: './convert.html',
  styleUrl: './convert.css'
})
export class Convert {
    // Temperature
    celsius: number = 0;
    fahrenheit: number = 32;

    // Length
    meters: number = 0;
    feet: number = 0;

    updateFromCelsius() {
        this.fahrenheit = this.celsius * 9 / 5 + 32;
    }

    updateFromFahrenheit() {
        this.celsius = (this.fahrenheit - 32) * 5 / 9;
    }

    updateFromMeters() {
        this.feet = this.meters * 3.28084;
    }

    updateFromFeet() {
        this.meters = this.feet / 3.28084;
    }

}
