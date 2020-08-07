import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserDetailsService } from '../user-details.service';





@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styles: [
  ]
})
export class ContactsComponent implements OnInit {
  response: object;

  constructor(private service: UserDetailsService , private http: HttpClient) { }

  ngOnInit(){
    this.service.getUserDeatails().subscribe((response) => {
      this.response = response;
      console.log(this.response);
    })
  }


}
