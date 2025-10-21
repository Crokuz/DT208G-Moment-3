import { Component, signal } from '@angular/core';

@Component({
    selector: 'app-quoter',
    imports: [],
    templateUrl: './quoter.html',
    styleUrl: './quoter.css'
})
export class Quoter {
    //Samtliga citat kommer från dokumentären "Angular: The Documentary" på YouTube. Länk:https://www.youtube.com/watch?v=cRC9DlH45lA
    quotes = [
        { text: "Could you simplify web development by connecting data and UI directly?", author: "Miško Hevery, före detta projketledare för Angular" },
        { text: "If you put Angular in front of web developers, they were hooked becuase they could write UIs in much less code and build far more interactive applications.", author: "Igor Minar, före detta projketledare för Angular" },
        { text: "A solution with developers in mind.", author: "Addy Osmani, Chef för Chrome Developer Experience på Google" }
    ];

    randomQuote = signal(this.getRandomQuote());

    private getRandomQuote() {
        const randomIndex = Math.floor(Math.random() * this.quotes.length);
        return this.quotes[randomIndex];
    }
}
