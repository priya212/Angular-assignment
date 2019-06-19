import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`
            <h2>{{title}}</h2>
            <input [(ngModel)]="data" type="text">
            {{data}}
            `, 
  styles: []
})
export class AppComponent {
  title = 'scenario2';

 data="";
}
