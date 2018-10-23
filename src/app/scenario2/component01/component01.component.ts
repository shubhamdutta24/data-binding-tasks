import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component01',
  templateUrl: './component01.component.html',
  styleUrls: ['./component01.component.css']
})
export class Component01Component implements OnInit {

  inputText = '';

  constructor() { }

  ngOnInit() {
  }

  onTyping(event: any) {
    this.inputText = '';
    this.inputText += event.target.value;
  }

}
