import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-status',
  templateUrl: './page-status.page.html',
  styleUrls: ['./page-status.page.scss'],
})
export class PageStatusPage implements OnInit {
  time = new Date();
  timer;

  constructor() { }

  ngOnInit() {
    this.timer = setInterval(() => {
      this.time = new Date();
      console.log(this.time);
    }, 1000);
  }

}
