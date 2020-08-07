import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-cpb',
  templateUrl: './cpb.component.html',
  styleUrls: ['./cpb.component.css']
})
export class CpbComponent implements OnInit {
   // for custom property binding
   @Input() age = 20; // @Input() will make age as property
   
   @Input() someRandomData: any = 'test';
   @Input() dummyData: any = 'hello';

  constructor() { }

  ngOnInit(): void {
  }

}
