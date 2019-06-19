import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component1',
  template:`
              <input [(ngModel)]="data" type="text">
              {{data}}
              `,
  styles: []
})
export class Component1Component implements OnInit {
  data="";
  constructor() { }
  
  ngOnInit() {
  }
  

}
