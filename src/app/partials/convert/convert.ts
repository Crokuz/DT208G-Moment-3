import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-convert',
    imports: [FormsModule],
    templateUrl: './convert.html',
    styleUrl: './convert.css'
})

export class Convert {
    //Deklarering av basvärden för temperaturer
    celsius: number = 0;
    fahrenheit: number = 32;

    //Deklarering av basvärden för längder
    meters: number = 0;
    feet: number = 0;

    //Metod för att konvertera celsius till fahrenheit 
    updateFromCelsius() {
        this.fahrenheit = this.celsius * 9 / 5 + 32;
    }

    //Metod för att konvertera fahrenheit till celsius 
    updateFromFahrenheit() {
        this.celsius = (this.fahrenheit - 32) * 5 / 9;
    }

    //Metod för att konvertera meter till fot 
    updateFromMeters() {
        this.feet = this.meters * 3.28084;
    }

    //Metod för att konvertera fot till meter 
    updateFromFeet() {
        this.meters = this.feet / 3.28084;
    }

}
