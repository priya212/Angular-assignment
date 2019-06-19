import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styles: []
})
export class Component2Component implements OnInit {
  @Output() public childEvent= new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  fireText(){
    this.childEvent.emit('Data send to parent component from child component');
  }
}
