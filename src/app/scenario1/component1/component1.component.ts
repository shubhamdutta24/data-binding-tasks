import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {

  value = 'tonight';
  inputText = 'type here';

  constructor() { }

  ngOnInit() {
  }

  // onClickPrint() {
  //   this.value = this.value === 'tonight' ? 'today' : 'tonight';
  // }

  // onKey(event: any) {
  //   this.value = '';
  //   this.value += event.target.value;
  // }

  onTyping(event: any) {
    this.inputText = '';
    this.inputText += event.target.value;
  }

  onClickLog() {
    console.log(this.inputText);
  }

}
