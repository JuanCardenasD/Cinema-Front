import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent  implements OnInit{

  /**
 *
 */
  constructor(public api: ApiService) {
  
  }
  ngOnInit(): void {
    this.api.Get("Users");
  }
}