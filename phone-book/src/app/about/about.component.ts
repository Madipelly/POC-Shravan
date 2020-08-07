import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styles: [
  ]
})
export class AboutComponent implements OnInit {
  isLoggedIn = true;
  name: string = 'hello';
  employee: any;

  isCollapsed = true;

  toggle(){
    this.isCollapsed =! this.isCollapsed;
  }

  skillsList: string[] = [
    'html', 'css', 'js'
  ];
  


  today: Date = new Date();

  constructor() {
    this.employee = {
      ename: 'Shravan',
      phone: [
        '123-456-756',
        '123-456-756',
        '123-456-756',
        '123-456-756'
      ]
    }
  }

  ngOnInit(): void {
  }

  dispaly()
  {
    window.alert("welcome to JS")
  }

}

