import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'buttons',
   templateUrl: './buttons.component.html',
   styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {
   buttonHeading: string = "Buttons";
   jokeButtonHeading: string = "Joke Buttons";
   active: boolean = true;
   // inactive: boolean = false;
   // silverInactive: boolean = false;
   // copperInactive: boolean = false;
   buttonState: boolean[] = [true, true, true];
   location: string = "center";

   constructor() { }

   ngOnInit() { }

   activate() {
      for(let i = 0; i < this.buttonState.length; i++) {
         this.buttonState[i] = true;
      }
      return this.buttonState;
   }

   catchMe(oldLocation: string) {
      while (this.location === oldLocation) {
         this.location = ['left', 'right', 'center'][Math.floor(Math.random()*3)];
      }
     return this.location;
   }

}
