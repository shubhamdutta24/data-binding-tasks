import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  master: string;

  onEnter(value: string) {
    this.master = value;
  }

  constructor() { }

  ngOnInit() {
  }

}
