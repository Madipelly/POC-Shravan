import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <h3>
       Hello..Shravan!!!
    </h3>
  `,
  styles: [
    `
    h3{
      color: blue;
    }
  `
  ]
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
