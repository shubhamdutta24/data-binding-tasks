import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {

  inputText = new FormControl('Wind storm');

  updateInputText() {
    this.inputText.setValue('Noob');
    this.onSubmit();
  }
  onSubmit() {
    console.warn('==========\n++++++++\n.\n.\n.\n');
    console.warn(this.inputText);
    console.warn('\n.\n.\n.\n++++++++\n==========');
  }

  print

  constructor() { }

  ngOnInit() {
  }

}
