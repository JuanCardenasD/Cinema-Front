import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent  implements OnInit{

  /**
 *
 */
  constructor(public api: ApiService) {
  
  }
  ngOnInit(): void {
    this.api.Get("Tickets");
  }
}
