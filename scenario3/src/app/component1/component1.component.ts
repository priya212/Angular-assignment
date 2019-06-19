import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styles: []
})
export class Component1Component implements OnInit {
  public text="Data send from parent component to child component";
  constructor() { }

  ngOnInit() {
  }

}
