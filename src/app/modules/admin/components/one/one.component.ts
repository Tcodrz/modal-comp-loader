import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.scss']
})
export class OneComponent implements OnInit {
  @Input() inputs: any;
  constructor() { }
  ngOnInit(): void {
    console.log(this.inputs);
  }
}
