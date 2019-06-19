import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`
            <h2>{{title}}</h2>
            <input #id type="text" >
            <button (click)="onSelect(id.value)">SEND</button>
            `,

  styleUrls: []
})
export class AppComponent {
  title = 'Scenario 1';
  onSelect(value){
    console.log(value);
  }
 
}
