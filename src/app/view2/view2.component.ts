import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view2',
  templateUrl: './view2.component.html',
  styleUrls: ['./view2.component.scss']
})
export class View2Component implements OnInit {

  message: string;

  constructor() { }

  ngOnInit(): void {
    this.message = $localize`hello friend`;
  }

}
