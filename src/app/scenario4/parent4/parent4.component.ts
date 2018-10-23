import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent4',
  templateUrl: './parent4.component.html',
  styleUrls: ['./parent4.component.css']
})
export class Parent4Component implements OnInit {

  agreed = 0;
  disagreed = 0;
  voters = ['Mr.IQ', 'Ms. Universe', 'Bombasto'];

  onVoted(agreed: boolean) {
    agreed ? this.agreed++ : this.disagreed++;
  }

  constructor() { }

  ngOnInit() {
  }

}
