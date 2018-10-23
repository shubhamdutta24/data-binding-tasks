import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child4',
  templateUrl: './child4.component.html',
  styleUrls: ['./child4.component.css']
})
export class Child4Component implements OnInit {

  master: string;
  @Input() name: string;


  @Output() pass = new EventEmitter<string>();

  onEnter(value: string) {
    this.master = value;
    this.pass.emit(this.master);
  }

  constructor() { }

  ngOnInit() {
  }

}
