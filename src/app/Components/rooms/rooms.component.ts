import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent  implements OnInit{

  /**
 *
 */
  constructor(public api: ApiService) {
  
  }
  ngOnInit(): void {
    this.api.Get("Rooms");
  }
}
